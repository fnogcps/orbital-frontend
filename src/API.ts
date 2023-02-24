import axios, {type AxiosResponse} from "axios";
const authSession = "Bearer " + localStorage.getItem("session");
axios.defaults.baseURL = "http://localhost:8001/api/";

export default class API {
  async getProducts(): Promise<AxiosResponse> {
    return await axios.get("products", {
      headers: {
        Authorization: authSession
      }
    });
  }

  async getProduct(id: number): Promise<AxiosResponse> {
    return await axios.get("products/" + id, {
      headers: {
        Authorization: authSession
      }
    });
  }

  async updateProduct(data: FormData, id: number): Promise<AxiosResponse> {
    return await axios.post("update/" + id, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authSession
      }
    });
  }

  async deleteResource(collection: Array<number>): Promise<AxiosResponse> {
    return await axios.post("delete", collection, {
      headers: {Authorization: authSession}
    });
  }

  async deleteItem(id: number): Promise<AxiosResponse> {
    return await axios.delete("/delete/" + id, {
      headers: {Authorization: authSession}
    });
  }

  async createProduct(data: FormData): Promise<AxiosResponse> {
    return await axios.post("/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: authSession
      }
    });
  }

  async signIn(data: FormData): Promise<AxiosResponse> {
    return await axios.post("login", data);
  }
}
