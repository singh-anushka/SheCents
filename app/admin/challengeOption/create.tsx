import {SimpleForm,Create,TextInput,ReferenceInput,required, BooleanInput} from "react-admin";
 
export const  ChallengeOptionCreate =() =>{
    return (
        <Create>
        <SimpleForm > 
        
        <TextInput  source="text"  validate={[required()]} label="text" />
        <BooleanInput  source="correct"
        label="correct option"
        />
        <ReferenceInput 
         source="challengeId"
         reference="challenges"
        />
        <TextInput 
        source="imageSrc"
        label="image URL"
        />

         <TextInput 
        source="audioSrc"
        label="Audio URL"
        />
        </SimpleForm>
     </Create>

    );
}