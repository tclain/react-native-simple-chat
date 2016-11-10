export default (count = 30) => {
    let result = []
    for(let i = 0; i < count; i++){
        let add = {
            id : i,
            message : `message ${i}`    
        }
        add.date = new Date();
        add.senderId = i % 2 == 0 ? "sender" : "peer", 
        add.avatar = i % 2 == 0 ?
                "https://s3.amazonaws.com/uifaces/faces/twitter/marcogomes/128.jpg"
                :
                "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg" ;

        if (i % 3 == 0){
            add.image = "http://placehold.it/100x100";           
        }
        result.push(add);
    }
    return result;
}