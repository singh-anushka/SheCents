import {SimpleForm,Edit,TextInput,ReferenceInput,required,NumberInput } from "react-admin";
 
export const  LessonEdit =() =>{
    return (
        <Edit>
        <SimpleForm > 
        
        <TextInput  source="title"  validate={[required()]} label="Title" />
        
        <ReferenceInput 
         source="unitId"
         reeference="units"
        />
        <NumberInput 
        source="order"
        validate={[required()]}
        label="order"
        />
        </SimpleForm>
     </Edit>

    );
}