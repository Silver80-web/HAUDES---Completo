export const getAllEmails = async () => {

    const orderEmails = (response) => {
        let orderedEmails = [];
        response.map((object) => {
            for(let key in object){
                orderedEmails.push(object[key]);
            }
    })
        return orderedEmails;   
    };
    
    try {
        const response = await axios.get('http://localhost:5000/students/emails');
        const emails = orderEmails(response.data);
        
        return emails;
    } catch (error) {
        console.error(error);
    }
};

export const getInfo = async () => {

    const orderInfo = (response) => {
        let fieldsArray = [];
        let orderedFields = [];

        const getFields = (field) => {
            let fields = [];
            for(let key in field){
                fields.push(field[key])
            }

            return fields;   
        };

        const orderField = (field, exceptionField) => {
            let orderedField = [];

            if(!exceptionField){
                field.map((object) => {
                    for(let key in object){
                        orderedField.push(object[key]);
                    }
                })
            } else {
                field.map(object => orderedField.push(object));
            }         
               

            return orderedField;   
        };

        for(let field in response) {
            let fields = getFields(response[field]);
            fieldsArray.push(fields);
        }
        
        fieldsArray[0].map((field, index) => {
            if(index < 2){
                const orderedField = orderField(field, false);
                orderedFields.push(orderedField);
            } else {
                const orderedField = orderField(field, true);
                orderedFields.push(orderedField);
            }
        })
        return orderedFields;   
    };

    try{
        const response = await axios.get('http://localhost:5000/students/info');
        const orderedInfo = orderInfo(response);
        return orderedInfo;
    } catch (error) {
        console.error(error);
    }
}

