import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {isset} from "./isset";
import {baseUrl,url} from "./Addresses";
import { Context } from "./Context";

const  useFetch = (domain,entrance= false, method = "POST") => {
    const [loading, setLoading] = useState(false);
    const {getItem} = useAsyncStorage('auth')
    let [data,setdata]=useState([])

    useEffect(() => { if(entrance == true){
        request()
    } else {
        null
    }

    }, []);

    const request = async (body = null) => {

        let autch = await getItem();

        setLoading(true);
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}${url}${domain}`, {
                method: method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${autch}`
                },
                body: JSON.stringify(body)
            }).then(response => response.json())
                .then(response => {
                    if (isset(response)) {
                        resolve(response)
                        // console.log('response>>>>',response)
                        setdata(response)
                        reject({
                            error: true,
                            message: response.message,
                            alert: response.alert
                        })

                    } else {
                        reject({
                            error: true,
                            message: response.msg,
                            alert: response.error
                        })
                    }

                })
                .catch(error => console.log('error ------>', error))
                .finally(() => {
                    setLoading(false);
                })
        })
    }
    return {request,loading,data}
};

export {useFetch}