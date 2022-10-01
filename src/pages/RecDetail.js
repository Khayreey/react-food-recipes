import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { Info , DetailWrapper , ButtonA} from '../StyledComponents/recipe'

function RecDetail() {
    let params = useParams()
    const [detail, setDetai] = useState({})
    const [activeTab , setActiveTab] = useState("instructions")
    const getRecipeById = async ()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_DELICIOUS_API_KEY}`)
        const detailData = await data.json()
        setDetai(detailData)
        console.log(detailData.extendedIngredients);
    }
    useEffect(()=>{
        getRecipeById()
    } , [params.name])
  return (
    <DetailWrapper  animate={{opacity:1}}
    initial={{opacity:0}} 
    exit={{opacity:0}}
    transition={{duration : .5 }}  >
      <div>
         <h2>{detail.title}</h2>
         <img src={detail.image} alt={detail.title} />
      </div>
      <Info>
        <ButtonA className={activeTab=== 'instructions' ? 'active' : ''} onClick={()=> setActiveTab("instructions")}>Instructions</ButtonA>
        <ButtonA className={activeTab=== 'ingredients' ? 'active' : ''} onClick={()=> setActiveTab("ingredients")}>Ingredients</ButtonA>
        {activeTab === 'instructions' && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: detail.summary}}></h3>
          <h4 dangerouslySetInnerHTML={{__html: detail.instructions}}></h4>
        </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
          {detail.extendedIngredients.map((e) =>
          {
            return  (<li key={e.id}>{e.original}</li>)
          }
         
          )}
        </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}

export default RecDetail