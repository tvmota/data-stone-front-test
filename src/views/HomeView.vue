<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import DtButton from '@/components/common/DtButton.vue'
import DtInput from '@/components/common/DtInput.vue'
import DtToggle from '@/components/common/DtToggle.vue'
import DtCheckbox from '@/components/common/DtCheckbox.vue'
import DtSelect from '@/components/common/DtSelect.vue'

const modelEx = ref('')
const modelEx2 = ref('')
const chkModel = ref(!true)
const chkModel2 = ref(true)

const btn1 = () =>
  toast('Wow so easy !', {
    autoClose: 1000,
    position: toast.POSITION.TOP_RIGHT
  })
const btn2 = () => console.log('click btn 2')
const options = [
  { value: 1, label: 'val 1' },
  { value: 2, label: 'val 2' },
  { value: 3, label: 'val 3' }
]
</script>
<template>
  <section>
    <DtButton variant="primary" size="sm" @click="btn1">Button 1</DtButton>
    <DtButton variant="secondary" size="sm" @click="btn2">Button 2</DtButton>
    <DtToggle v-model="chkModel">text</DtToggle>
    <DtCheckbox v-model="chkModel2" />
    <DtInput
      v-model="modelEx"
      field-name="teste"
      field-placeholder="teste"
      label-txt="Teste"
      :field-required="true"
      :has-error="true"
      error-msg="Teste"
    />
    <!--select
      required
      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary bg-slate-200"
    >
      <option value="" disabled selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select-->
    <DtSelect v-model="modelEx2" field-name="teste" label-txt="Teste" :options="options" />
  </section>
</template>

<style>
select:invalid {
  color: gray;
}

option[value=''][disabled] {
  display: none;
}
option {
  color: #000;
}
</style>
