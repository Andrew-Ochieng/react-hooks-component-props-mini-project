// imports
// import '../index.css'


const Article = ({title, date, preview, minutes}) => {
    return ( 
        <div className="article">
            <article>
                <h3>{title}</h3>
                {
                    date ? <small>{date}</small> :
                    <small>January 1, 1970</small>
                }

                <p>{preview}</p>
                <p>{minutes}</p>
                
            </article>


        </div>


     );
}
 
export default Article;
