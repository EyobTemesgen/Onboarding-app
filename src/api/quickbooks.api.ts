import apiClient from "./axios.config.ts";

export const quickbooksApi = {
  // Get QuickBooks company info
  getCompanyInfo: async () => {
    try {
      const response = await apiClient.get('/quickbooks/company/info');
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to get company info: ${error.response?.data?.message || error.message}`);
    }
  },

  // Get list of accounts
  getAccounts: async () => {
    try {
      const response = await apiClient.get('/quickbooks/accounts');
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to get accounts: ${error.response?.data?.message || error.message}`);
    }
  },

  // Create a new invoice
  createInvoice: async (invoiceData: any) => {
    try {
      const response = await apiClient.post('/quickbooks/invoices', invoiceData);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to create invoice: ${error.response?.data?.message || error.message}`);
    }
  },

  // Get list of invoices
  getInvoices: async () => {
    try {
      const response = await apiClient.get('/quickbooks/invoices');
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to get invoices: ${error.response?.data?.message || error.message}`);
    }
  },

  // Update customer info
  updateCustomer: async (customerId: string, customerData: any) => {
    try {
      const response = await apiClient.put(`/quickbooks/customers/${customerId}`, customerData);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to update customer: ${error.response?.data?.message || error.message}`);
    }
  }
};
