import axios from "axios"; //Cliente HTTP para hacer solicitudes

const YES_NO_API_URL = "https://yesno.wtf/api/";

//Funcion de consumir API YesNo en forma funcional
const consumirAPIYesNo = async () => {
    try {
        const response = await axios.get(YES_NO_API_URL);
        console.log("Respuesta:", response.data);
        return response.data;  // ← Ahora sí retorna
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

//Facade para exportar la funcion de consumir API YesNo
export default async function ConsumirAPIFacade() {
  return await consumirAPIYesNo();
}


