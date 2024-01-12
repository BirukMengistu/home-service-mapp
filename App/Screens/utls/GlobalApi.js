import { request, gql } from 'graphql-request'
const Base_URL='https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clr7srqi203jx01w1oi6v64s3/master'
const getSlider =async ()=>{

 const query = gql`
  query GetSliders {
sliders {
    id
    name
    image {
      url
    }
  }
}

`
const Slider_Result = await request(Base_URL, query)

return Slider_Result
}

const getCategories= async()=>{
    const query= gql`
    query GetSliders {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
    `
 const Categorie_Result = await request(Base_URL, query)

 return Categorie_Result   
}

const getServicelists= async ()=>{
    const query = gql`
    query getServicelist {
  servicesList {
    id
    name
    email
    categories
    address
    contactPerson
    about
    images {
      id
    }
  }
}`
 const Servicelists_Result = await request(Base_URL, query)

 return Servicelists_Result  
}
export default {
    getSlider,
    getCategories
}