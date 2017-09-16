using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MEdicareEnrollement.Controllers
{
    public class EnrollmentController : Controller
    {
        // GET: Enrollment

        public ActionResult Index(int? applicantid, int? applicationdetailid)
        {
            if (applicantid == null)
            {
                ViewBag.applicationid = 0;
            }
            else {
                ViewBag.applicationid = applicantid;
            }
            if (applicationdetailid == null)
            {
                ViewBag.applicantdetailid = 0;
            }
            else {
                ViewBag.applicantdetailid = applicationdetailid;
            }


            return View();
        }
        public ActionResult MedicareInfo()
        {
            return View();
        }
        public ActionResult PlannPrimary()
        {
            return View();
        }
        public ActionResult Register()
        {
            return View();
        }
        public ActionResult ESRDQues()
        {
            return View();
        }
        public ActionResult ContactInfo()
        {
            return View();
        }
        public ActionResult AddContactInfo()
        {
            return View();
        }

        public ActionResult PEDate()
        {
            return View();
        }
        public ActionResult ChronicQues()
        {
            return View();
        }
        public ActionResult PrimaryCare()
        {
            return View();
        }
        public ActionResult SEP()
        {
            return View();
        }
        public ActionResult LTCQuestions()
        {
            return View();
        }
        public ActionResult OptionalInfo()
        {
            return View();
        }
        public ActionResult PlanInfo()
        {
            return View();
        }
        public ActionResult CurrentEnrol()
        {
            return View();
        }
        public ActionResult GrpCovgeQues()
        {
            return View();
        }
        public ActionResult OSB()
        {
            return View();
        }
        public ActionResult Payment()
        {
            return View();
        }
        public ActionResult Signature()
        {
            return View();
        }
        public ActionResult Chronicnew()
        {
            return View();
        }

    }
}