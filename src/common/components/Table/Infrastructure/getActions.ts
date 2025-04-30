export const getActions = (primaryKey: 'merchant' | 'client') => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
    const actionUrls = {
      delete: `${baseUrl}/${primaryKey}/delete`,
      update: `${baseUrl}/${primaryKey}/update`,
      info: `${baseUrl}/${primaryKey}/info`,
    };
  
    return actionUrls;
  };

  /* 
  
  const merchantActions = getActionUrls('merchant');
console.log(merchantActions);
// Output: { delete: '.../merchant/delete', edit: '.../merchant/edit', update: '.../merchant/update' }

const clientActions = getActionUrls('client');
console.log(clientActions);
// Output: { delete: '.../client/delete', edit: '.../client/edit', update: '.../client/update' }
  */