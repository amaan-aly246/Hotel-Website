export const formatPrice = (num)=>{
    return new Intl.NumberFormat("en-IN").format(num)
}