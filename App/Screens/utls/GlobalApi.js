import { request, gql } from "graphql-request";
const Base_URL =
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clr7srqi203jx01w1oi6v64s3/master";
const getSlider = async () => {
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
  `;
  const Slider_Result = await request(Base_URL, query);

  return Slider_Result;
};

const getCategories = async () => {
  const query = gql`
    query GetSliders {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const Categorie_Result = await request(Base_URL, query);

  return Categorie_Result;
};

const getServiceLists = async () => {
  const query = gql`
    query getServicelist {
        servicesList {
    about
    address
    category {
      name
    }
    contactPerson
    email
    images {
      url
    }
    name
  }
    }
  `;
  const Servicelists_Result = await request(Base_URL, query);
  return Servicelists_Result;
};

const getServicelistByCategory=async (category)=>{
  const query=gql`
  query getServicelist {
servicesList(where: {category: {name: "`+category+`" }}) {
    about
    address
    email
    images {
      url
    }
    name
    contactPerson
    imageslist {
      url
    }
}
}
  `

const ServicelistsByCategory_Result = await request(Base_URL, query);
return ServicelistsByCategory_Result;
}
export default {
  getSlider,
  getCategories,
  getServiceLists,
  getServicelistByCategory
};
