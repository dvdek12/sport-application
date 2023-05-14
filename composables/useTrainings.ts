export const useTrainings =  () => ( async () => {
    const { data } = await useFetch(() => `/api/trainings`, {
        pick: ['trainings'],

        onRequestError({ error }) {
            console.log("error->", error);
        }
    })

    return useState("trainings", () => data)
});