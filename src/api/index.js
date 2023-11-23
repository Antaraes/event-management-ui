import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

//Auth
export const verification = (userId, token) => API.get(`/auth/verify/${userId}/${token}`);

export const staffSignup = (data) => API.post(`/auth/signup_staff`, data);
export const staffLogin = (data) => API.post(`/auth/login_staff`, data);
export const organizerSignup = (data) => API.post(`/auth/signup_organizer`, data);
export const organizerLogin = (data) => API.post(`/auth/login_organizer`, data);

//Organizer
export const getOrganizers = () => API.get(`/organizer/get_all`);
export const getOrganizerProfile = (organizerId) => API.get(`/organizer/${organizerId}`);

export const addOrganizer = (data) => API.post(`/organizer/create`, data);

export const updateOrganizerProfile = (organizerId, organizerData) => API.patch(`/organizer/update/${organizerId}`, organizerData);
export const manageOrganizerLevel = (organizerId, organizerLevel) => API.patch(`/organizer/update_level/${organizerId}/${organizerLevel}`);
export const manageOrganizerStatus = (organizerId, organizerStatus) => API.patch(`/organizer/update_status/${organizerId}/${organizerStatus}`);
export const manageOrganizerPhone = (organizerId, organizerPhone) => API.patch(`/organizer/update_phone/${organizerId}/${organizerPhone}`);
export const manageOrganizerEmail = (organizerId, organizerEmail) => API.patch(`/organizer/update_email/${organizerId}/${organizerEmail}`);

//Event
export const getEvents = () => API.get("/event/");
export const getEventById = (eventId) => API.get(`/event/${eventId}`);
export const searchEvents = (query) => API.get(`/event/search${query}`);
export const sortEvents = (query) => API.get(`/event/sort${query}`);
export const sortTrending = (query) => API.get(`/event/boots${query}`);

export const createEvent = (data) => API.post(`/event/create`, data);
export const boostEvent = (eventId) => API.post(`/event/boots/${eventId}`);

//Customer
export const getCustomers = () => API.get(`/customer/all-customer`);
export const getCustomerById = (customerId) => API.get(`/customer/customerById/${customerId}`);

export const addCustomer = (data) => API.post(`customer/add-customer`, data);

//Ticket
export const getTickets = () => API.get(`/ticket/`);

export const addTicket = (data) => API.post(`/ticket/create`, data);

//Account Upgrade Payment
export const getUpgradePayments = () => API.get(`/upgrade-payment/all`);
export const getUpgradePaymentById = (paymentId) => API.get(`/upgrade-payment/${paymentId}`);

export const addUpgradePayment = (data) => API.post(`/upgrade-payment/add`, data);

export const activateUpgradePaymentStatus = (paymentId, data) => API.put(`/upgrade-payment/update/${paymentId}`, data);
export const deactivateUpgradePaymentStatus = (paymentId, data) => API.put(`/upgrade-payment/disable/${paymentId}`, data);

//Organizer Invoice
export const getOrganizerInvoices = () => API.get(`/organizer-invoice/all`);
export const getOrganizerInvoiceById = (invoiceId) => API.get(`/organizer-invoice/${invoiceId}`);

export const createOrganizer = (data) => API.post(`/organizer-invoice/create`, data);

//Admin
export const getAdmins = () => API.get(`/admin/find-all-admin`);
export const getAdminById = (adminId) => API.get(`/admin/${adminId}`);

export const addAdmin = (data) => API.post(`/admin/create`, data);

export const promoteToAdmin = (staffId, data) => API.put(`/admin/update/${staffId}`, data);
export const deactivateAccount = (accountId, data) => API.put(`/admin/deactivate/${accountId}`, data);

//Organizer Dashboard
export const   getOrganizerDashboardBarChartData = (organizerId) => API.get(`//organizer-dashboard/barchart/${organizerId}`);
export const   getOrganizerDashboardOverviewData = (organizerId) => API.get(`/organizer-dashboard/overview-data/${organizerId}`);
