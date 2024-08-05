import { tablaDescuentos } from "./tablaDescuentos";

export function descuento(date: string, value: number) {
    const inputDate = new Date(date);

    // Obtiene la fecha actual
    const currentDate = new Date();

    // Calcula la diferencia en años
    const yearsDiff = currentDate.getFullYear() - inputDate.getFullYear();
    const hasNotPassedBirthdayThisYear = (
        currentDate.getMonth() < inputDate.getMonth() ||
        (currentDate.getMonth() === inputDate.getMonth() && currentDate.getDate() < inputDate.getDate())
    );

    const actualYears = hasNotPassedBirthdayThisYear ? yearsDiff - 1 : yearsDiff;

    const valueDescuento = tablaDescuentos.find(val => val.edad == actualYears)
    
    if (valueDescuento) {
        const total = value - valueDescuento?.precio
        const porcentaje = value / total
        return {total, porcentaje}
    } else {
        const porcentaje = 0
        const total = value
        return {total, porcentaje}
    }
}