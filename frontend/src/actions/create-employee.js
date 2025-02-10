import api from '../services/api'


export const createEmployee = async (
    values
) => {
 
    try {
     
        const response = await api.post('/createEmployee', {...values}
          
        )
      //  console.log('response',response)
       
        if (response) {    
    
          return response
        }
      } catch (error) {

        console.error('erorrr', error);
        throw  { error: error.response?.data?.error };
        
       
      }

}