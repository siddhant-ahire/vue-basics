import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const types = {
APPEND_NUMBER : 'APPEND_NUMBER',
CLEAR : 'CLEAR',
ADD : 'ADD',
SUBTRACT : 'SUBTRACT',
MULTIPLY : 'MULTIPLY',
DIVIDE : 'DIVIDE',
CALCULATE : 'CALCULATE',
SET_OPERAND_VALUE : 'SET_OPERAND_VALUE',
SET_FILTERS : 'SET_FILTERS',
GET_CATOGORIES: 'GET_CATOGORIES',
GET_PRODUCTS : 'GET_PRODUCTS'
}

const state = {
    result: 0,
    visibleValue: 0,
    firstOperand: null,
    operator: null,
    secondOperand: null,
    append: true,
    filters: {
        category:'',
    },
    products:[],
    categories:[]
}


const mutations = {
        [types.APPEND_NUMBER] (state, { value }) {
            if (state.append) {
                state.visibleValue = parseFloat(state.visibleValue.toString() + value.toString())
            } else {
                state.visibleValue = parseFloat(value)
                state.append = true
            }
            if (state.operator) {
                state.secondOperand = state.visibleValue
            } else {
                state.firstOperand = state.visibleValue
            }
        },
    
        [types.ADD] (state) {
            state.append = false
            if (state.operator) {
                calculate(state)
                state.operator = 'ADD'
                return
            }
            state.operator = 'ADD'
    
            if (state.firstOperand && state.secondOperand) {
                state.result = state.firstOperand + state.secondOperand
                state.firstOperand = state.result
                state.secondOperand = null
            }
        },
    
        [types.SUBTRACT] (state) {
            state.append = false
            if (state.operator) {
                calculate(state)
                state.operator = 'SUBTRACT'
                return
            }
            state.operator = 'SUBTRACT'
    
            if (state.firstOperand && state.secondOperand) {
                state.result = state.firstOperand - state.secondOperand
                state.firstOperand = state.result
                state.secondOperand = null
            }
        },
    
        [types.DIVIDE] (state) {
            state.append = false
            if (state.operator) {
                calculate(state)
                state.operator = 'DIVIDE'
                return
            }
            state.operator = 'DIVIDE'
    
            if (state.firstOperand && state.secondOperand) {
                state.result = state.firstOperand / state.secondOperand
                state.firstOperand = state.result
                state.secondOperand = null
            }
        },
    
        [types.MULTIPLY] (state) {
            state.append = false
            if (state.operator) {
                calculate(state)
                state.operator = 'MULTIPLY'
                return
            }
            state.operator = 'MULTIPLY'
    
            if (state.firstOperand && state.secondOperand) {
                state.result = state.firstOperand * state.secondOperand
                state.firstOperand = state.result
                state.secondOperand = null
            }
        },
    
        [types.CALCULATE] (state) {
            state.append = false
            calculate(state)
            state.visibleValue = state.result
            state.operator = null
        },
    
        [types.CLEAR] (state) {
            state.result = 0
            state.visibleValue = 0
            state.firstOperand = null
            state.secondOperand = null
            state.operator = null
        },
    
        [types.SET_OPERAND_VALUE] (state, {value}) {
            if (state.operator) {
                state.secondOperand = parseFloat(value)
            } else {
                state.firstOperand = parseFloat(value)
            }
            state.visibleValue = parseFloat(value)
        },
        [types.GET_PRODUCTS] (state){
            axios.get(`https://fakestoreapi.com/products${state.filters.category ? `/category/${state.filters.category}` : ''}`)
            .then(data => {
                state.products = data.data;
                console.log(state.products)
            })
        },
        [types.GET_CATOGORIES] (state){
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(data => {
                state.categories = data.data;
                console.log(state.categories)
            })
        },
        [types.SET_FILTERS] (state,{value}){
            if(value.category){
                state.filters.category = value.category;
            }
            return
        }
}


const actions = {
    add({commit}) {
        commit(types.ADD)
    },
    subtract({commit}) {
        commit(types.SUBTRACT)
    },
    
    multiply ({commit}){
        commit(types.MULTIPLY)
    },
    
    divide({commit}) {
        commit(types.DIVIDE)
    },
    
    clear({commit}) {
        commit(types.CLEAR)
    },
    
    appendNumber({commit}, value) {
        commit(types.APPEND_NUMBER, {value})
    },
    
    calculate({commit}) {
        commit(types.CALCULATE)
    },
    
    setOperandValue({commit}, value) {
        commit(types.SET_OPERAND_VALUE, {value})
    },

    getCategories({commit}){
        commit(types.GET_CATOGORIES)
    },

    getProducts({commit}){
        commit(types.GET_PRODUCTS)
    },

    setFilters({commit},value){
        commit(types.SET_FILTERS,{value})
    }
}

const calculate = (state) => {
    if (! state.firstOperand || ! state.secondOperand || ! state.operator) {
        return
    }
    if (state.operator === 'ADD') {
        state.result = state.firstOperand + state.secondOperand
    } else if (state.operator === 'SUBTRACT') {
        state.result = state.firstOperand - state.secondOperand
    } else if (state.operator === 'MULTIPLY') {
        state.result = state.firstOperand * state.secondOperand
    } else if (state.operator === 'DIVIDE') {
        state.result = state.firstOperand / state.secondOperand
    }
    state.firstOperand = state.result
    state.secondOperand = null
}


export default new Vuex.Store({
    state,
    actions,
    mutations
})