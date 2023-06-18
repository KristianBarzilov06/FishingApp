namespace FishingApi.Data
{
    public class FishingDam
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Address { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string ContactNumber { get; set; }
        public string WaterBodyType { get; set; }

        public virtual ICollection<FishSpecies>? FishSpecies { get; set; }
        public string Regulations { get; set; }
        public string Amenities { get; set; }
        public FishingDam()
        {
            FishSpecies = new HashSet<FishSpecies>();
        }
    }
}
