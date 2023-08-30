const express = require("express");
const router = express.Router();

router.post("/get-working-hour", function (req, res, next) {
  res.status(200).json({
    statusCode: 200,
    message: "Working hour data successfully retrieve",
    data: {
      SHIFT: "SHIFT OFF",
      DAY: "Saturday",
      START_HOUR: "00:00",
      END_HOUR: "23:59",
    },
  });
});

router.post("/get-leave-subordinate", function (req, res, next) {
  res.status(200).json({
    statusCode: 200,
    message: "Leave data successfully retrieve",
    data: {
      numberOfDay: 1,
      leaveData: [
        {
          PERSON_ID: "19029",
          EMPLOYEE_NUMBER: "81065",
          ABSENCE_ATTENDANCE_ID: "4068853",
          DATE_START: "2023-09-06",
          DATE_END: "2023-09-08",
          ABSENCE_DAYS: "1",
          TYPECUTI: "CUTI TAHUNAN PERMANENT",
          OBJECT_VERSION_NUMBER: "1",
        },
      ],
    },
  });
});

module.exports = router;
