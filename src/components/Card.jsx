export default function Card({item, isVisible, isFinished, onCardClick}){
    const {id, url} = item;
    const handleClick = () => {
        onCardClick(id)
    }
    const classCard = `card 
    ${isVisible ? 'card-show':''} 
    ${isFinished ? 'card-finished':''} `

    return(
    <li className={classCard} 
    onClick={handleClick}>
        <img src={url} width="204" height="144" alt=""/>
        
    </li>
    )
}