import { httpService } from "./http-service";

class TransactionService {
  async getAllTransactions(filters = {}) {
    return httpService.get("/api/transactions", { data: filters });
  }

  async getTransactionById(id) {
    return httpService.get(`/api/transactions/${id}`);
  }

  async createTransaction(transactionData) {
    return httpService.post("/api/transactions", transactionData);
  }

  async updateTransaction(id, transactionData) {
    return httpService.put(`/api/transactions/${id}`, transactionData);
  }

  async deleteTransaction(id) {
    return httpService.delete(`/api/transactions/${id}`);
  }

  async getTransactionsByDateRange(startDate, endDate) {
    return httpService.get("/api/transactions/range", {
      data: { startDate, endDate },
    });
  }
}

export const transactionService = new TransactionService();
