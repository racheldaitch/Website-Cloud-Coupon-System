class Config {

}

class DevelopmentConfig {
    public adminUrl = "http://localhost:8080/api/admin/";
    public companyUrl = "http://localhost:8080/api/company/";
    public customerUrl = "http://localhost:8080/api/customer/";
    public authUrl = "http://localhost:8080/auth/login";
    public allCoupons = "http://localhost:8080/allCoupons";
}

class ProductionConfig {
        public adminUrl = "https://https://main--riki-coupons-system.netlify.app/";

    //public adminUrl = "https://server-cloud-coupon-system-production.up.railway.app/api/admin/";
    public companyUrl = "https://server-cloud-coupon-system-production.up.railway.app/api/company/";
    public customerUrl = "https://server-cloud-coupon-system-production.up.railway.app/api/customer/";
    public authUrl = "https://server-cloud-coupon-system-production.up.railway.app/auth/login";
    public allCoupons = "https://server-cloud-coupon-system-production.up.railway.app/allCoupons";
}

const appConfig = process.env.NODE_ENV == "production"
    ?  new ProductionConfig() : new DevelopmentConfig();
export default appConfig;
