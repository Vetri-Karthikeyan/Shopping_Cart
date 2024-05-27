namespace Shopping_Cart_API.Models
{
    public class CartItem
    {
        public int Id { get; set; }
        public Product Product { get; set; } = new Product();
    }
}
