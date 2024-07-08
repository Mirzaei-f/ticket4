import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Black, White } from '../../InitialValue/Colors'
import { RFValue } from 'react-native-responsive-fontsize';

const StatusView = (status) => {
    const [message, setMessage] = useState('')
    const [color, setColor] = useState(null)


    useEffect(() => {
        switch (parseInt(status)) {
            case 2000:
                setMessage('در حال اتصال ...')
                setColor('rgba(254,255,2,0.66)')
                break;
            case 2001:
                setMessage('پخش زنده شروع شد')
                setColor('rgba(42,187,24,0.66)')
                break;
            case 2002:
                setMessage('اتصال با خطا رو برو شد دوباره امتحان کنید')
                setColor('#e74c3c')
                break;
            case 2004:
                setMessage('پخش زنده متوقف شد')
                setColor('rgba(255,150,2,0.66)')
                break;
        }
    }, [status])

    useEffect(() => {
        if (status == 2001) {
            setTimeout(() => {
                setMessage('');
                setColor(null)
            }, 5000)
        }
    }, [status])

    return (
        <View style={{ alignItems: 'center', backgroundColor: color }}>
            <Text style={{ color: Black, fontSize: RFValue(16), padding: 20, fontFamily: 'BYekan' }}>{message}</Text>
        </View>


    )

}

export { StatusView }

const styles = StyleSheet.create({})