
export const answerListOptions = (parentId="") => {
    return(
        {
            getAllByParentId:{
                method: 'GET',
                url: `http://localhost:8080/respuestas/parentId/${parentId}`,
                headers: {'Content-Type': 'application/json'}
                }
        }
    )
}