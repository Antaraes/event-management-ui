import API from "./interceptors";

//Auth
export const verification = (userId, token) =>
  API.get(`/auth/verify/${userId}/${token}`);

export const staffSignup = (data) => API.post(`/auth/signup_staff`, data);
export const staffLogin = (data) => API.post(`/auth/login_staff`, data);
export const adminLogin = (data) => API.post(`/auth/login_admin`, data);
export const organizerSignup = (data) =>
  API.post(`/auth/signup_organizer`, data);
export const organizerLogin = (data) => API.post(`/auth/login_organizer`, data);
export const getOTPCode = (data) => API.post(`/auth/get_otpcode`, data);
export const verifyOTPcode = (data) => API.post(`/auth/verify_otpcode`, data);
export const generateAccessToken = () => API.post(`/auth/refresh`);
export const logout = () => API.post(`/auth/logout`);

//Organizer
export const getOrganizers = () => API.get(`/organizer/get_all`);
export const fetchOrganizers = (query) => API.get(`/organizer/all${query}`);
export const getOrganizerProfile = () => API.get(`/organizer`);
export const addOrganizer = (data) => API.post(`/organizer/create`, data);
export const updateOrganizerProfile = (organizerId, organizerData) =>
  API.patch(`/organizer/update`, organizerData);
export const manageOrganizerLevel = (organizerId, organizerLevel) =>
  API.patch(`/organizer/update_level/${organizerLevel}`);
export const manageOrganizerStatus = (organizerId, organizerStatus) =>
  API.patch(`/organizer/update_status/${organizerStatus}`);
export const manageOrganizerPhone = (organizerId, organizerPhone) =>
  API.patch(`/organizer/update_phone/${organizerPhone}`);
export const manageOrganizerEmail = (organizerId, organizerEmail) =>
  API.patch(`/organizer/update_email/${organizerEmail}`);

//Public Side Organizer
export const getPublicSideOrganizerDetail = (organizerId) =>
  API.get(`/public-organizer/${organizerId}`);

//Organizer Payment
export const getAllPaymentFromOrganizer = () =>
  API.get(`/organizer-payment/all`);
export const updateOrganizerPayment = (paymentId, paymentData) =>
  API.put(`/organizer-payment/update/${paymentId}`, paymentData);
export const addOrganizerPayment = (paymentData) =>
  API.post("/organizer-payment/create", paymentData);

//Event
export const getEvents = (query) => API.get(`/event${query}`);
export const getEventById = (eventId) => API.get(`/event/find/${eventId}`);
export const getEventByIdForBuyTicket = (eventId) =>
  API.get(`/event/payments/${eventId}`);
export const searchEvents = (query) => API.get(`/event/search${query}`);
export const sortEvents = (query) => API.get(`/event/sort${query}`);
export const sortTrending = (query) => API.get(`/event/boots${query}`);
export const getEventByOrganizerId = (OrganizerId) =>
  API.get(`/event/events-by-organizer/${OrganizerId}`);
export const createEvent = (data) => API.post(`/event/create`, data);
export const boostEvent = (data) => API.post(`/event/boost`, data);

//Customer
export const getCustomerById = (customerId) =>
  API.get(`/customer/customerById/${customerId}`);
export const addCustomer = (data) => API.post(`customer/add-customer`, data);

//Ticket
export const getTickets = () => API.get(`/ticket/`);
export const addTicket = (data) => API.post(`/ticket/create`, data);
export const getAllAvailableTicketsByEvent = (eventId) =>
  API.get(`/event/total-avaliable-ticket/${eventId}`);

//Account Upgrade Payment
export const getUpgradePayments = () => API.get(`/upgrade-payment/all`);
export const getUpgradePaymentById = (paymentId) =>
  API.get(`/upgrade-payment/${paymentId}`);

export const addUpgradePayment = (data) =>
  API.post(`/upgrade-payment/add`, data);

export const activateUpgradePaymentStatus = (paymentId, data) =>
  API.put(`/upgrade-payment/update/${paymentId}`, data);
export const deactivateUpgradePaymentStatus = (paymentId) =>
  API.put(`/upgrade-payment/disable/${paymentId}`);

//Organizer Invoice
export const getOrganizerInvoices = (query) =>
  API.get(`/ticket/get_tickets${query}`);
export const getOrganizerInvoiceById = (invoiceId) =>
  API.get(`/organizer-invoice/${invoiceId}`);

export const createOrganizer = (data) =>
  API.post(`/organizer-invoice/create`, data);

//Admin
export const getAdmins = () => API.get(`/admin/find-all-admin`);
export const getAdminById = (adminId) => API.get(`/admin/find/${adminId}`);

export const addAdmin = (data) => API.post(`/admin/create`, data);

export const promoteToAdmin = (staffId, data) =>
  API.put(`/admin/update/${staffId}`, data);
export const deactivateAccount = (accountId, data) =>
  API.put(`/admin/deactivate/${accountId}`, data);
export const subscription = (data) =>
  API.post(`/organizer-invoice/upgradeOrganizerLevel`, data);

//Organizer Dashboard
export const getOrganizerDashboardBarChartData = (queryParams) =>
  API.get(`/organizer-dashboard/barchart?${queryParams}`);
export const getOrganizerDashboardOverviewData = (queryParams) =>
  API.get(`/organizer-dashboard/overview-data?${queryParams}`);
export const getEventsByOrganizerId = () =>
  API.get(`/event/events-by-organizer`);

//Admin Dashboard
export const getTotalEvents = () => API.get(`/dashboard/event`);
export const getTotalOrganizers = () => API.get(`/dashboard/organizer`)
