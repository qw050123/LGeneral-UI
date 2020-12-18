<template>
    <div class="lgn-input">
        <input class="lgn-input__inner" :type="inputType" v-model="inputValue" :placeholder="placeholder" @input="sendInputValue()">
        <span class="lgn-input__suffix">
            <span class="lgn-input__suffix-icon"></span>
        </span>
    </div>
</template>
<script>
export default {
    name: 'lgnInput',
    props: {
        type: String,
        value: null,
        placeholder: null
    },
    data(){
        return{
            inputType: this.type,
            inputValue: this.value,
        }
    },
    methods: {
        sendInputValue(){
            this.$emit('input',this.inputValue)
        }
    }
}
</script>