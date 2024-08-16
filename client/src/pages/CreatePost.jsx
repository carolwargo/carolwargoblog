
export default function CreatePost() {

    return (
        <div>
            <div className="w3-container w3-content">
            <h1>Create Post</h1>
            <form>
                <input 
                type="title"
                placeholder={'title'}
               />
                <input 
                type="summary"
                placeholder={'summary'}
                />
                <input 
                type="context"
                placeholder={'context'}
               />
               <input type="file" 
               />
               <textarea 
               className="w-100 my-1"
               name="" id=""
               cols={30} rows={10}
               >
               </textarea>
               <button className="w-100 mb-5 bg-primary">Add Post</button>
            </form>
        </div>
        </div>
    )}

    