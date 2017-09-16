using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.Text;

namespace MEdicareEnrollement.Controllers
{
    public class ResultController : Controller
    {
        // GET: Result
        public ActionResult Index(int id)
        {
            string EnrollWebAPIurl = System.Configuration.ConfigurationManager.AppSettings["EnrollWebAPI"].ToString();
            string HumanaWebAPIurl = System.Configuration.ConfigurationManager.AppSettings["HumanaWebAPI"].ToString();
            ViewBag.Title = "Home Page";
            //Enroll WebAPI
            HttpClient local = new HttpClient();
            local.BaseAddress = new Uri(EnrollWebAPIurl);
            local.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            string jsondata = string.Empty;
            var Localresponse = local.GetAsync("api/HumanaAPI/GetData/" + id).Result;
            if (Localresponse.IsSuccessStatusCode)
            {
                var result = Localresponse.Content.ReadAsStringAsync();
                jsondata = result.Result;

            }
            //Humana WebAPI
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(HumanaWebAPIurl);
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Add("x-humana-api-key", "Pi0LYycgIUd99GQzUY9fWqYYIkfy7RcB");
            var content = new StringContent(jsondata, Encoding.UTF8, "application/json");
            var response = client.PostAsync("v1/medicare-enrollment/enrollment", content).Result;
            if (response.IsSuccessStatusCode)
            {
                var result = response.Content.ReadAsStringAsync();

                SuccessResponse obj = JsonConvert.DeserializeObject<SuccessResponse>(result.Result);
                ViewBag.EnrollmentID = obj.enrollment_id;
                ViewBag.EnrollmentResponse = obj.enrollment_response_status;
                ViewBag.errordata = "";
            }
            else
            {
                var result = response.Content.ReadAsStringAsync();
                ViewBag.errordata = response.StatusCode + " : Message - " + response.ReasonPhrase + result.Result;
                ErrorResponse obj = JsonConvert.DeserializeObject<ErrorResponse>(result.Result);
                ViewBag.errorobj = obj;
            }
            return View();
        }
        public class Error
        {
            public string code { get; set; }
            public string detail { get; set; }
            public int status { get; set; }
        }

        public class ErrorResponse
        {
            public List<Error> errors { get; set; }
        }

        public class IneligibleReason
        {
            public string ineligible_code { get; set; }
            public string ineligilbe_description { get; set; }
        }

        public class SuccessResponse
        {
            public string enrollment_id { get; set; }
            public string enrollment_response_status { get; set; }
            public List<IneligibleReason> ineligible_reasons { get; set; }
        }
    }
}