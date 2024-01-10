<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import DtButton from '@/components/common/DtButton.vue'
import DtInput from '@/components/common/DtInput.vue'
import DtToggle from '@/components/common/DtToggle.vue'

const modelEx = ref('Xablau')
const chkModel = ref(!true)

const btn1 = () =>
  toast('Wow so easy !', {
    autoClose: 1000,
    position: toast.POSITION.TOP_RIGHT
  })
const btn2 = () => console.log('click btn 2')
</script>
<template>
  <section>
    <DtButton variant="primary" size="sm" @click="btn1">Button 1</DtButton>
    <DtButton variant="secondary" size="sm" @click="btn2">Button 2</DtButton>
    <DtToggle v-model="chkModel">text</DtToggle>

    <DtInput
      v-model="modelEx"
      field-name="teste"
      field-placeholder="teste"
      label-txt="Teste"
      :field-required="true"
      :has-error="true"
      error-msg="Teste"
    />
  </section>
</template>
