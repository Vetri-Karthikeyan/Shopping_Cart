namespace Shopping_Cart_API.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public int OfferId { get; set; } 
        public double Price { get; set; }
        public int Quantity { get; set; }
        
    }
}
