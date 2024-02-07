import React from 'react';
import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing';



type Printer  ={
    url?: string
}
export function usePrint() {
    const [selectedPrinter, setSelectedPrinter] = React.useState<Printer>()

    async function print(html: string) {
        await Print.printAsync({
            html,
            printerUrl: selectedPrinter?.url
        })
    }

    async function printToFile(html: string) {
        const {uri} = await Print.printToFileAsync({html})
        await shareAsync(uri, {UTI: '.pdf', mimeType: 'application/pdf'})
    }


    async function selectPrinter() {
        const printer = await Print.selectPrinterAsync()
        setSelectedPrinter(printer)
    }


    return {print, printToFile, selectPrinter}
}