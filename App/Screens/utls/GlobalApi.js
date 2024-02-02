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

const getMyInbox= async(email)=>{
  const inboxQuery=gql`
      query myInbox {
        inboxes(
          orderBy: updatedAt_DESC
          where: {AND:  {userEmail_contains: "`+email+`"}}
        ) {
          userName
          userEmail
          message
          servicesLists {
            name
            images {
              url
            }
            telephone
            address
            email
            contactPerson
            category {
              name
            }
          }
        }
}`
  const inbox_Result = await request(Base_URL, inboxQuery);

  return inbox_Result;
} 


const CreateMessage = async (data) => {
  const {userEmail ,userName ,message ,servicesId } =data
  
  const mutationQuery = gql`
  mutation CreateMessage {
  createInbox(
    data: { 
    servicesLists: { connect: { id:"`+servicesId+`" } }, 
    userEmail: "` +userEmail + `",
    userName: "` +userName +` " ,
    message: "`+message + `"
      }) {id}
      publishManyInboxes(to: PUBLISHED) {
      count
     }
      }`;
 
  const send_messageResp = await request(Base_URL, mutationQuery);
  return send_messageResp;
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
      servicesList (
        orderBy: updatedAt_DESC
      ) {
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

const getServicelistByCategory = async (category) => {
  const query =
    gql`
  query getServicelist {
servicesList(where: {category: {name: "` +
    category +
    `" }}) {
    id,
    about,
    address,
    email,
    category{
      name
    },
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
  `;

  const ServicelistsByCategory_Result = await request(Base_URL, query);
  return ServicelistsByCategory_Result;
};

const createbookingServices = async (data) => {
  const {time , date ,userEmail ,userName ,note ,servicesId } =data
  
  const mutationQuery = gql`
  mutation CreateBookingservice {
  createBookingservices(
    data: { 
    bookingProgress: Booked,
    time: "`+time + `" ,
    date: "` + date +`",
    servicesLists: { connect: { id:"`+servicesId+`" } }, 
    userEmail: "` +userEmail + `",
    userName: "` +userName +` " ,
    note: "`+note + `"
      }) {id}
      publishManyBookingservice(to: PUBLISHED) {
      count
     }
      }`;
 
  const ServiceBooking_Result = await request(Base_URL, mutationQuery);
  return ServiceBooking_Result;
};



const getSearchServices= async (searchKey)=>{

  const query=gql`
  query mysearch {
  servicesList(where: { _search: "`+ searchKey +`" }) {
        id
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
  `
  const Result = await request(Base_URL,query);
  return Result;
}


const MyBooking = async(email)=>{
  
const myBooking_Query= gql`
query MyBookingList {
  bookingservice(orderBy: updatedAt_DESC, where: {userEmail:"`+ email +`"}) {
    note,
    date,
    time,
    userEmail,
    userName,
    bookingProgress,
    id,
    servicesLists {
      images {
        url
      },
      name,
      address,
      contactPerson,
      category{
        name
      },
      email
    }
  }
}`

const myBooking_Result = await request(Base_URL, myBooking_Query);
return myBooking_Result;
}




const getTags = async()=>{
  const query =gql`
  query getTags {
  tags {
    name
    icon {
      url
    }
  }
}`
const tags_result = await request(Base_URL, query);
return tags_result;

}

const getInformationlist = async()=>{
  const query =gql`
  query getInformationlist {
  information(orderBy: updatedAt_DESC) {
    body
    source
    title
    images {
      url
    }
    tag {
      ... on Tag {
        name
      }
    }
  }
}
`
const info_result = await request(Base_URL, query);
return info_result;

}

const getSearchInformation= async (searchKey)=>{
const query = gql`
query mysearch {
  information(where: {_search: "`+ searchKey +`"}) {
    id
    tag {
      ... on Tag {
        id
        name
      }
    }
    images {
      url
    }
    title
    updatedAt
    source
    body
  }
}`
const info_result = await request(Base_URL, query);
return info_result;
}
export default {
  getSlider,
  getCategories,
  getServiceLists,
  getServicelistByCategory,
  createbookingServices,
  MyBooking,
  getMyInbox,
  CreateMessage,
  getSearchServices,
  getTags,
  getInformationlist,
  getSearchInformation
};
