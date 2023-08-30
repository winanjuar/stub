const express = require("express");
const router = express.Router();

router.get("/list-subordinate-eligible-timecard", function (req, res, next) {
  res.status(200).json({
    statusCode: 200,
    message: "OK",
    data: {
      superior: {
        person_id: "58331",
        nik: "82241",
        nama: "Hasanul Haq",
        email: "hasanul_haq@telkomsel.co.id",
        band: "3",
        job_category: "Manager",
        title: "Manager - Indirect Sales Branch Batam",
      },
      subordinates: [
        {
          person_id: "16437",
          nik: "72327",
          nama: "R. Risna Nora",
          title: "Staff - Community and Digital Lifestyle Batam",
          band: "1",
          email: "R_Risnanora@telkomsel.co.id",
          timezone: "Asia/Bangkok",
          job_category: "Staff",
        },
        {
          person_id: "400991",
          nik: "93216",
          nama: "Gilang Ikhsan Kamil",
          title: "Staff - Indirect Sales Tanjung Pinang",
          band: "1",
          email: "gilang_i_kamil@telkomsel.co.id",
          timezone: "Asia/Bangkok",
          job_category: "Staff",
        },
        {
          person_id: "447843",
          nik: "92319",
          nama: "Mohamad Iqbal Siddiq",
          title: "Staff - Indirect Sales Batam",
          band: "1",
          email: "mohamad_i_siddiq@telkomsel.co.id",
          timezone: "Asia/Bangkok",
          job_category: "Staff",
        },
      ],
    },
  });
});

module.exports = router;
