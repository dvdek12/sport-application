export default defineNuxtRouteMiddleware((to, from) => {
    const isTrainingPage = useIsTrainingPage()
    
    if(to.fullPath === '/trainings'){
        isTrainingPage.value = true
    }else{
        isTrainingPage.value = false
    }
    
})
