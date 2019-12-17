<template>
    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-name"
        label="Recipe Name:"
        label-for="input-name"
        description="Recipe Name here."
      >
        <b-form-input
          id="input-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter Recipe Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-description" label="Recipe Description:" label-for="input-description">
        <b-form-input
          id="input-description"
          v-model="form.description"
          required
          placeholder="Enter Recipe Description"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-foodtype" label="Food Type:" label-for="input-foodtype">
        <b-form-select
          id="input-foodtype"
          v-model="form.foodtype"
          :options="foodtypes"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Add Recipe</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                  name: '',
                  description: '',
                  foodtypes: []
                },
                foodtypes: ['Vegetarian', 'Non-Vegetarian'],
                show:true
            }
        },
        methods: {
          onSubmit () {

          },
          onReset () {
            
          }
        }
    }
</script>