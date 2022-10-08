import { fetchCall, fetchLoginCall } from '../utils/ajax';
import { API_CONSTANTS, API_METHODS } from '../constants/api-constant';

export const Login = (callback, payload) => {
  const url = `${API_CONSTANTS.LOGIN}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.PUT, payload);
};
export const verifyOtp = (callback, payload) => {
  const url = `${API_CONSTANTS.VERIFY_OTP}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.PUT, payload);
};

export const Register = (callback, payload) => {
  const url = `${API_CONSTANTS.REGISTER}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const ViewAllDocuments = (callback, payload) => {
  const url = `${API_CONSTANTS.GET_SERVICE_DETAILS}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.GET, payload);
};
export const deleteCategory = (callback, payload) => {
  const queryString= `?categoryId=${payload}`
  const url = `${API_CONSTANTS.DELETE_CATEGORY + queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.DELETE);
};


export const ViewAllCategories = (callback, payload) => {
  const url = `${API_CONSTANTS.GET_CATEGORY_DETAILS}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};
export const ViewAllDocumentsByCat = (callback, payload) => {
  // const categoryIdQueryString = `?CategoryId=${payload.CategoryId}`
  const url = `${API_CONSTANTS.VIEW_ALL_DOCS_BY_CAT}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const forgotPassword = (callback, payload) => {
  const queryStringEmail= `?email=${payload}`
  const url = `${API_CONSTANTS.FORGOT_PASSWORD + queryStringEmail}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
};
export const resetPassword = (callback, payload) => {
  const url = `${API_CONSTANTS.RESET_PASSWORD}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};
export const getRefreshToken = (callback, payload) => {
  const url = `${API_CONSTANTS.GET_REFRESH_TOKEN}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.PUT, payload);
};
export const AddToCart = (callback, payload) => {
  const queryString = `?documentId=${payload.documentId}`;
  const url = `${API_CONSTANTS.ADD_TO_CART+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
};
export const removeFromCart = (callback, payload) => {
  const queryString = `?documentId=${payload.documentId}`;
  const url = `${API_CONSTANTS.REMOVE_FROM_CART+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
};
export const viewCartItems = (callback, payload) => {
  const url = `${API_CONSTANTS.VIEW_CART_ITEMS}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const addSignDocument = (callback, payload) => {
  const url = `${API_CONSTANTS.DOCUMENT_SIGN}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};
export const getUserProfile = (callback, payload) => {
  const url = `${API_CONSTANTS.GET_USER_PROFILE}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.GET, payload);
};

export const UserSentDocuments = (callback, payload) => {
  const url = `${API_CONSTANTS.USER_SENT_DOCUMENTS}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.GET, payload);
};
export const PlaceOrder = (callback, payload) => {
  const url = `${API_CONSTANTS.PLACE_ORDER}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const UserDocuments = (callback, payload) => {
  const queryString = `?documentId=${payload}`;
  const url = `${API_CONSTANTS.USER_DOCUMENTS+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
};

export const ViewDocumentById = (callback, payload) => {
  const queryString = `?Id=${payload}`;
  const url = `${API_CONSTANTS.VIEW_DOCUMENT_BY_ID+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.GET);
};

export const SendEmail = (callback, payload) => {
  const url = `${API_CONSTANTS.SEND_EMAIL}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const GetSignatureStatus = (callback, payload) => {
  const queryString = `?envelopeId=${payload}`;
  const url = `${API_CONSTANTS.DOCU_SIGN_GET_SIGNATURE_STATUS+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
};
export const VerificationEmail = (callback, payload) => {
  const queryString = `?token=${payload}`;
  const url = `${API_CONSTANTS.VERIFY_EMAIL+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
};
export const updateProfile = (callback, payload) => {
  const url = `${API_CONSTANTS.UPDATE_PROFILE}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};
export const getUserSentDocumentsById = (callback, payload) => {
  const queryString = `?envId=${payload}`;
  const url = `${API_CONSTANTS.USER_SENT_DOCUMENTS_BY_ID+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.GET);
};
export const getCountriesList = (callback, payload) => {
  const url = `${API_CONSTANTS.GET_COUNTRIES_LIST}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.GET, payload);
};
export const resendEmailVerification = (callback, payload) => {
  const queryString = `?email=${payload}`;
  const url = `${API_CONSTANTS.RESEND_EMAIL_VERIFICATION+queryString}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
};
export const getSubsciptionToken = (callback, payload) => {
  const url = `${API_CONSTANTS.GET_SUBSCRIPTION_TOKEN}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.GET, payload);
};
export const AddHashDetails = (callback, payload) => {
  const url = `${API_CONSTANTS.ADDHASH_DETAILS}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const BlockChainUpload = (callback, payload) => {
  const url = `${API_CONSTANTS.BLOCKCHAIN_UPLOAD}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const addNewDocument = (callback, payload) => {
  const url = `${API_CONSTANTS.ADD_NEW_DOCUMENT}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}
export const addPrimaryDocument = (callback, payload) => {
  const url = `${API_CONSTANTS.ADD_PRIMARY_DOCUMENT}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}

export const requestNewDocument = (callback, payload) => {
  const url = `${API_CONSTANTS.REQUEST_NEW_DOCUMENT}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}


export const viewMyDocumentRequests = (callback, payload) => {
  const url = `${API_CONSTANTS.VIEW_MY_DOCUMENT_REQUESTS}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.GET, payload);
}

export const editMyRequest = (callback, payload) => {
  const url = `${API_CONSTANTS.EDIT_MY_REQUEST}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}

export const viewAllDocumentRequests = (callback, payload) => {
  const url = `${API_CONSTANTS.VIEW_DOCUMENT_REQUESTS}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.GET, payload);
}


export const EditDocumentRequestStatus = (callback, payload) => {
  const queryString = `?id=${payload.id}&status=${payload.status}`;
  const url = `${API_CONSTANTS.EDIT_DOCUMENT_REQUEST_STATUS+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
}

export const RequestStatusDropDown = (callback, payload) => {
  const url = `${API_CONSTANTS.REQUEST_STATUS_DROPDOWN}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.GET, payload);
}

export const UploadEditedDocument  = (callback, payload) => {
  const url = `${API_CONSTANTS.UPLOAD_EDITED_DOCUMENT}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}
export const addCategory  = (callback, payload) => {
  const url = `${API_CONSTANTS.ADD_CATEGORY}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}
export const addPrimaryCategory  = (callback, payload) => {
  const url = `${API_CONSTANTS.ADD_PRIMARY_CATEGORY}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}
export const updateCategory  = (callback, payload) => {
  const url = `${API_CONSTANTS.UPDATE_CATEGORY}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}
export const updateDocument  = (callback, payload) => {
  const url = `${API_CONSTANTS.UPDATE_DOCUMENT}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.PUT, payload);
}
export const deleteDocument  = (callback, payload) => {
  const queryString= `?Id=${payload}`
  const url = `${API_CONSTANTS.DELETE_DOCUMENT+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.DELETE);
}
export const sendLegalContactMail  = (callback, payload) => {
  const url = `${API_CONSTANTS.SEND_LEGAL_CONTRACT_MAIL}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}
export const contactUs  = (callback, payload) => {
  const url = `${API_CONSTANTS.CONTACT_US}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}

export const resendOTP  = (callback, payload) => {
  const url = `${API_CONSTANTS.RESEND_OTP}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.PUT, payload);
}
export const resendDocument  = (callback, payload) => {
  const queryString= `?documentId=${payload}`
  const url = `${API_CONSTANTS.RESEND_DOCUMENT+queryString}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
}
export const confirmResendDocument  = (callback, payload) => {
  const url = `${API_CONSTANTS.CONFIRM_RESEND_DOCUMENT}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
}