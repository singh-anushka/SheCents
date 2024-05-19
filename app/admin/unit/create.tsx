import {SimpleForm,Create,TextInput,ReferenceInput,required,NumberInput } from "react-admin";
 
export const  UnitCreate =() =>{
    return (
        <Create>
        <SimpleForm > 
        
        <TextInput  source="title"  validate={[required()]} label="Title" />
        <TextInput  source="description"  validate={[required()]} label="Description"  />
        <ReferenceInput 
         source="courseId"
         reeference="courses"
        />
        <NumberInput 
        source="order"
        validate={[required()]}
        label="order"
        />
        </SimpleForm>
     </Create>

    );
}