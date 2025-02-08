class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }
  
    //POST Comments
    async postComment(comment) {
      try {
        const response = await fetch(`${this.baseUrl}/comments?api_key=${this.apiKey}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(comment)
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
  
    // GET Comments
    async getComments() {
      try {
        const response = await fetch(`${this.baseUrl}/comments?api_key=${this.apiKey}`, {
          method: "GET",
          headers: {
           //"Authorization": `Bearer ${this.apiKey}`
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const comments = await response.json();
        return comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  
    //GET Shows
    async getShows() {
      try {
        const response = await fetch(`${this.baseUrl}/showdates?api_key=${this.apiKey}`, {
          method: "GET",
          headers: {
            //"Authorization": `Bearer ${this.apiKey}`
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    }
  }
  
  export default BandSiteApi;
  