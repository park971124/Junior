
      var mapContainer = document.getElementById('map'),
        mapOption = {
          center: new kakao.maps.LatLng(36.368782, 127.346848),
          level: 4
        };

      var map = new kakao.maps.Map(mapContainer, mapOption);

      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      function setDraggable(draggable) {
        map.setDraggable(draggable);
      }

      function setZoomable(zoomable) {
        map.setZoomable(zoomable);
      }

      function relayout() {
        map.relayout();
      }

      var
        imageSize = new kakao.maps.Size(32, 33),
        imageOption = {
          offset: new kakao.maps.Point(9, 23)
        };

      var imageSrc_atm = 'https://i.imgur.com/cDrYhlw.png',
        imageSrc_bank = 'https://i.imgur.com/2HqyC3X.png',
        imageSrc_bookstore = 'https://i.imgur.com/zvVWe32.png',
        imageSrc_cafe = 'https://i.imgur.com/eHkD7el.png',
        imageSrc_glasses = 'https://i.imgur.com/TFrEH2J.png',
        imageSrc_health = 'https://i.imgur.com/TQjPVZV.png',
        imageSrc_library = 'https://i.imgur.com/5ZNKKGF.png',
        imageSrc_pharmacy = 'https://i.imgur.com/3QaHOQX.png',
        imageSrc_post = 'https://i.imgur.com/wQL4yQU.png',
        imageSrc_recruit = 'https://i.imgur.com/YoAcX0Q.png',
        imageSrc_soccer = 'https://i.imgur.com/qDVKWD5.png',
        imageSrc_stationery = 'https://i.imgur.com/M9KEHqB.png',
        imageSrc_store = 'https://i.imgur.com/GUG6OP8.png',
        imageSrc_student = 'https://i.imgur.com/Qt3ibnT.png',
        imageSrc_time = 'https://i.imgur.com/iYYgJtJ.png';

      var image_atm = new kakao.maps.MarkerImage(imageSrc_atm, imageSize, imageOption),
        image_bank = new kakao.maps.MarkerImage(imageSrc_bank, imageSize, imageOption),
        image_bookstore = new kakao.maps.MarkerImage(imageSrc_bookstore, imageSize, imageOption),
        image_cafe = new kakao.maps.MarkerImage(imageSrc_cafe, imageSize, imageOption),
        image_glasses = new kakao.maps.MarkerImage(imageSrc_glasses, imageSize, imageOption),
        image_health = new kakao.maps.MarkerImage(imageSrc_health, imageSize, imageOption),
        image_library = new kakao.maps.MarkerImage(imageSrc_library, imageSize, imageOption),
        image_pharmacy = new kakao.maps.MarkerImage(imageSrc_pharmacy, imageSize, imageOption),
        image_post = new kakao.maps.MarkerImage(imageSrc_post, imageSize, imageOption),
        image_recruit = new kakao.maps.MarkerImage(imageSrc_recruit, imageSize, imageOption),
        image_soccer = new kakao.maps.MarkerImage(imageSrc_soccer, imageSize, imageOption),
        image_stationery = new kakao.maps.MarkerImage(imageSrc_stationery, imageSize, imageOption),
        image_store = new kakao.maps.MarkerImage(imageSrc_store, imageSize, imageOption),
        image_student = new kakao.maps.MarkerImage(imageSrc_student, imageSize, imageOption);

      var position_1nd_Student = new kakao.maps.LatLng(36.367810, 127.343169),
        position_2nd_Student = new kakao.maps.LatLng(36.365970, 127.345818),
        position_3nd_Student = new kakao.maps.LatLng(36.371397, 127.344740),
        position_global_academy = new kakao.maps.LatLng(36.362930, 127.346224),
        position_library = new kakao.maps.LatLng(36.370199, 127.346024),
        position_1nd_nature = new kakao.maps.LatLng(36.369365, 127.343683),
        position_economy = new kakao.maps.LatLng(36.367437, 127.346154),
        position_2nd_engineer = new kakao.maps.LatLng(36.363966, 127.346241),
        position_3nd_engineer = new kakao.maps.LatLng(36.365214, 127.346609),
        position_dorm = new kakao.maps.LatLng(36.372692, 127.346716),
        position_gung = new kakao.maps.LatLng(36.362907, 127.347772),
        position_woori_bank = new kakao.maps.LatLng(36.365411, 127.344597),
        position_hana_bank = new kakao.maps.LatLng(36.367866, 127.343148),
        position_sinhyeob_bank = new kakao.maps.LatLng(36.367866, 127.343148),
        position_post = new kakao.maps.LatLng(36.367485, 127.342626),
        position_soccer = new kakao.maps.LatLng(36.374970, 127.342469);

      //학생회관
      var points_student = [
        new kakao.maps.Marker({
          position: position_1nd_Student,
          image: image_student,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_2nd_Student,
          image: image_student,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_3nd_Student,
          image: image_student,
          clickable: true
        })
      ];

      //카페
      var points_cafe = [
        new kakao.maps.Marker({
          position: position_global_academy,
          image: image_cafe,
          clickable: true
        }),
        new kakao.maps.Marker({ //영탑 포함
          position: position_1nd_Student,
          image: image_cafe,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_2nd_Student,
          image: image_cafe,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_library,
          image: image_cafe,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_3nd_Student,
          image: image_cafe,
          clickable: true
        })
      ];

      //매점
      var points_store = [
        new kakao.maps.Marker({
          position: position_1nd_Student,
          image: image_store,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_2nd_Student,
          image: image_store,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_3nd_Student,
          image: image_store,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_library,
          image: image_store,
          clickable: true
        })
      ];

      //은행별 atm
      var points_atm_hana = [
        new kakao.maps.Marker({
          position: position_library,
          image: image_atm,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_1nd_nature,
          image: image_atm,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_economy,
          image: image_atm,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_2nd_engineer,
          image: image_atm,
          clickable: true
        }), new kakao.maps.Marker({
          position: position_3nd_engineer,
          image: image_atm,
          clickable: true
        }), new kakao.maps.Marker({
          position: position_global_academy,
          image: image_atm,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_dorm,
          image: image_atm,
          clickable: true
        })
      ];
      var points_atm_kb = [
        new kakao.maps.Marker({
          position: position_dorm,
          image: image_atm,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_gung,
          image: image_atm,
          clickable: true
        })
      ];
      var point_atm_sh = new kakao.maps.Marker({
        position: position_1nd_Student,
        image: image_atm,
        clickable: true
      });
      var point_atm_nh = new kakao.maps.Marker({
        position: position_dorm,
        image: image_atm,
        clickable: true
      });
      var point_atm_post = new kakao.maps.Marker({
        position: position_dorm,
        image: image_atm,
        clickable: true
      })
      //은행
      var points_bank = [
        new kakao.maps.Marker({
          position: position_woori_bank,
          image: image_bank,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_hana_bank,
          image: image_bank,
          clickable: true
        }),
        new kakao.maps.Marker({
          position: position_sinhyeob_bank,
          image: image_bank,
          clickable: true
        })
      ];

      //편의시설
      var point_bookstore = new kakao.maps.Marker({
        position: position_1nd_Student,
        image: image_bookstore,
        clickable: true
      });

      var point_glasses = new kakao.maps.Marker({
        position: position_1nd_Student,
        image: image_glasses,
        clickable: true
      });

      var point_post = new kakao.maps.Marker({
        position: position_post,
        image: image_post,
        clickable: true
      });

      var point_pharm = new kakao.maps.Marker({
        position: position_1nd_Student,
        image: image_pharmacy,
        clickable: true
      });

      var point_library = new kakao.maps.Marker({
        position: position_library,
        image: image_library,
        clickable: true
      });

      var point_soccer = new kakao.maps.Marker({
        position: position_soccer,
        image: image_soccer,
        clickable: true
      });

      var point_stationery = new kakao.maps.Marker({
        position: position_1nd_Student,
        image: image_stationery,
        clickable: true
      });

      var point_health = new kakao.maps.Marker({
        position: position_1nd_Student,
        image: image_health,
        clickable: true
      });

      var point_recruit = new kakao.maps.Marker({
        position: position_2nd_Student,
        image: image_recruit,
        clickable: true
      });

      var iwRemoveable = true;

      var iwContent_1nd_student = '<div style="padding:5px;">&lt;1학생회관&gt;<br>평일 09:00~19:00<br>토요일 11:00~19:00</div>',
        iwContent_2nd_student = '<div style="padding:5px;">&lt;2학생회관&gt;<br>평일<br>아침 08: 00~09:00<br>점심 11:30~14:00</div>',
        iwContent_3nd_student = '<div style="padding:5px;">&lt;3학생회관&gt;<br>평일<br>점심 11:30~14:00</div>',
        iwContent_cafe_global_academy = '<div style="padding:5px;">&lt;99카페_국제언어교육원&gt;<br>평일 08:30~20:00</div>',
        iwContent_cafe_1nd_student_youngtop = '<div style="padding:5px;">&lt;99카페&gt;<br>평일 08:30~21:00<br>토요일 10:00~19:00<br>일, 공휴일 10: 00~18:00<br>&lt;영탑&gt;<br>학기중 평일 08:00~18:00<br>방학중 평일 08:30~17:30</div>',
        iwContent_cafe_2nd_student = '<div style="padding:5px;">&lt;99카페_2학생회관&gt;<br>평일 08:30~22:00<br>주말 09:00~20:00</div>',
        iwContent_cafe_library = '<div style="padding:5px;">&lt;99카페_도서관&gt;<br>평일 08:30~22:00<br>주말 09:00~20:00</div>',
        iwContent_cafe_3nd_student = '<div style="padding:5px;">&lt;99카페_3학생회관&gt;<br>평일 08:30~17:30</div>',
        iwContent_store_1nd_student = '<div style="padding:5px;">&lt;매점_1학생회관&gt;<br>평일 09:00~18:00</div>',
        iwContent_store_2nd_student = '<div style="padding:5px;">&lt;매점_2학생회관&gt;<br>평일 08:30~17:30</div>',
        iwContent_store_3nd_student = '<div style="padding:5px;">&lt;매점_3학생회관&gt;<br>평일 11:00~18:00</div>',
        iwContent_store_library = '<div style="padding:5px;">&lt;매점_도서관&gt;<br>평일 07:00~22:00<br>주말 10:00~17:00</div>',
        iwContent_atm_hana = '<div style="padding:5px;">&lt;ATM_하나&gt;</div>',
        iwContent_atm_kb = '<div style="padding:5px;">&lt;ATM_국민&gt;</div>',
        iwContent_atm_sh = '<div style="padding:5px;">&lt;ATM_신협&gt;</div>',
        iwContent_atm_nh = '<div style="padding:5px;">&lt;ATM_농협&gt;</div>',
        iwContent_atm_post = '<div style="padding:5px;">&lt;ATM_우체국&gt;</div>',
        iwContent_bank = '<div style="padding:5px;">&lt;은행&gt;<br>평일 09:00~16:00</div>',
        iwContent_bookstore = '<div style="padding:5px;">&lt;서점&gt;<br>평일 10:00~17:00</div>',
        iwContent_glasses = '<div style="padding:5px;">&lt;안경점&gt;<br>평일 09:00~18:30<br>주말 11:00~16:00</div > ',
        iwContent_post = '<div style="padding:5px;">&lt;우체국&gt;<br>평일 09:00~18:00</div>',
        iwContent_pharm = '<div style="padding:5px;">&lt;약국&gt;<br>평일 09:30~18:00</div>',
        iwContent_library = '<div style="padding:5px;">&lt;도서관&gt;<br>아래 참조</div>',
        iwContent_soccer = '<div style="padding:5px;">&lt;풋살장&gt;<br>3~10월 06:00~21:00<br>11~2월 06:00~21:00</div>',
        iwContent_stationery = '<div style="padding:5px;">&lt;문구점&gt;<br>평일 08:30~18:30<br>주말 10:00~16:00</div>',
        iwContent_health = '<div style="padding:5px;">&lt;보건진료소&gt;<br>평일 09:00~18:00<br>점심시간 12:00~13:00</div>',
        iwContent_recruit = '<div style="padding:5px;">&lt;인재개발원&gt;<br>평일 09:00~18:00<br>점심시간 12:00~13:00</div>';

      var infowindow_1nd_student = new kakao.maps.InfoWindow({
          content: iwContent_1nd_student,
          removable: iwRemoveable
        }),
        infowindow_2nd_student = new kakao.maps.InfoWindow({
          content: iwContent_2nd_student,
          removable: iwRemoveable
        }),
        infowindow_3nd_student = new kakao.maps.InfoWindow({
          content: iwContent_3nd_student,
          removable: iwRemoveable
        });

      var infowindow_cafe_global_academy = new kakao.maps.InfoWindow({
          content: iwContent_cafe_global_academy,
          removable: iwRemoveable
        }),
        infowindow_cafe_1nd_student_youngtop = new kakao.maps.InfoWindow({
          content: iwContent_cafe_1nd_student_youngtop,
          removable: iwRemoveable
        }),
        infowindow_cafe_2nd_student = new kakao.maps.InfoWindow({
          content: iwContent_cafe_2nd_student,
          removable: iwRemoveable
        }),
        infowindow_cafe_library = new kakao.maps.InfoWindow({
          content: iwContent_cafe_library,
          removable: iwRemoveable
        }),
        infowindow_cafe_3nd_student = new kakao.maps.InfoWindow({
          content: iwContent_cafe_3nd_student,
          removable: iwRemoveable
        });

      var infowindow_store_1nd_student = new kakao.maps.InfoWindow({
          content: iwContent_store_1nd_student,
          removable: iwRemoveable
        }),
        infowindow_store_2nd_student = new kakao.maps.InfoWindow({
          content: iwContent_store_2nd_student,
          removable: iwRemoveable
        }),
        infowindow_store_3nd_student = new kakao.maps.InfoWindow({
          content: iwContent_store_3nd_student,
          removable: iwRemoveable
        }),
        infowindow_store_library = new kakao.maps.InfoWindow({
          content: iwContent_store_library,
          removable: iwRemoveable
        });

      var infowindow_atm_hana = new kakao.maps.InfoWindow({
          content: iwContent_atm_hana,
          removable: iwRemoveable
        }),
        infowindow_atm_kb = new kakao.maps.InfoWindow({
          content: iwContent_atm_kb,
          removable: iwRemoveable
        }),
        infowindow_atm_sh = new kakao.maps.InfoWindow({
          content: iwContent_atm_sh,
          removable: iwRemoveable
        }),
        infowindow_atm_nh = new kakao.maps.InfoWindow({
          content: iwContent_atm_nh,
          removable: iwRemoveable
        }),
        infowindow_atm_post = new kakao.maps.InfoWindow({
          content: iwContent_atm_post,
          removable: iwRemoveable
        }),
        infowindow_bank = new kakao.maps.InfoWindow({
          content: iwContent_bank,
          removable: iwRemoveable
        }),
        infowindow_bookstore = new kakao.maps.InfoWindow({
          content: iwContent_bookstore,
          removable: iwRemoveable
        }),
        infowindow_glasses = new kakao.maps.InfoWindow({
          content: iwContent_glasses,
          removable: iwRemoveable
        }),
        infowindow_post = new kakao.maps.InfoWindow({
          content: iwContent_post,
          removable: iwRemoveable
        }),
        infowindow_pharm = new kakao.maps.InfoWindow({
          content: iwContent_pharm,
          removable: iwRemoveable
        }),
        infowindow_library = new kakao.maps.InfoWindow({
          content: iwContent_library,
          removable: iwRemoveable
        }),
        infowindow_soccer = new kakao.maps.InfoWindow({
          content: iwContent_soccer,
          removable: iwRemoveable
        }),
        infowindow_stationery = new kakao.maps.InfoWindow({
          content: iwContent_stationery,
          removable: iwRemoveable
        }),
        infowindow_health = new kakao.maps.InfoWindow({
          content: iwContent_health,
          removable: iwRemoveable
        }),
        infowindow_recruit = new kakao.maps.InfoWindow({
          content: iwContent_recruit,
          removable: iwRemoveable
        });

      function student_on() {
        map.panTo(center);

        for (var i = 0; i < points_student.length; i++) {
          points_student[i].setMap(map);
        };

        kakao.maps.event.addListener(points_student[0], 'click', function() {
          infowindow_1nd_student.open(map, points_student[0]);
        });
        kakao.maps.event.addListener(points_student[1], 'click', function() {
          infowindow_2nd_student.open(map, points_student[1]);
        });
        kakao.maps.event.addListener(points_student[2], 'click', function() {
          infowindow_3nd_student.open(map, points_student[2]);
        });
      }

      function student_off() {
        for (var i = 0; i < points_student.length; i++) {
          points_student[i].setMap(null);
        }
        kakao.maps.event.removeListener(points_student[0], 'click', function() {
          infowindow_1nd_student.open(map, points_student[0]);
        });

        kakao.maps.event.removeListener(points_student[1], 'click', function() {
          infowindow_2nd_student.open(map, points_student[1]);
        });
        kakao.maps.event.removeListener(points_student[2], 'click', function() {
          infowindow_3nd_student.open(map, points_student[2]);
        });
        infowindow_1nd_student.close(map, points_student[0]);
        infowindow_2nd_student.close(map, points_student[1]);
        infowindow_3nd_student.close(map, points_student[2]);
      }

      function cafe_on() {
        map.panTo(center);

        for (var i = 0; i < points_cafe.length; i++) {
          points_cafe[i].setMap(map);
        }
        kakao.maps.event.addListener(points_cafe[0], 'click', function() {
          infowindow_cafe_global_academy.open(map, points_cafe[0]);
        });
        kakao.maps.event.addListener(points_cafe[1], 'click', function() {
          infowindow_cafe_1nd_student_youngtop.open(map, points_cafe[1]);
        });
        kakao.maps.event.addListener(points_cafe[2], 'click', function() {
          infowindow_cafe_2nd_student.open(map, points_cafe[2]);
        });
        kakao.maps.event.addListener(points_cafe[3], 'click', function() {
          infowindow_cafe_library.open(map, points_cafe[3]);
        });
        kakao.maps.event.addListener(points_cafe[4], 'click', function() {
          infowindow_cafe_3nd_student.open(map, points_cafe[4]);
        });
      }

      function cafe_off() {
        for (var i = 0; i < points_cafe.length; i++) {
          points_cafe[i].setMap(null);
        }
        kakao.maps.event.removeListener(points_cafe[0], 'click', function() {
          infowindow_cafe_global_academy.open(map, points_cafe[0]);
        });
        kakao.maps.event.removeListener(points_cafe[1], 'click', function() {
          infowindow_cafe_1nd_student_youngtop.open(map, points_cafe[1]);
        });
        kakao.maps.event.removeListener(points_cafe[2], 'click', function() {
          infowindow_cafe_2nd_student.open(map, points_cafe[2]);
        });
        kakao.maps.event.removeListener(points_cafe[3], 'click', function() {
          infowindow_cafe_library.open(map, points_cafe[3]);
        });
        kakao.maps.event.removeListener(points_cafe[4], 'click', function() {
          infowindow_cafe_3nd_student.open(map, points_cafe[4]);
        });
        infowindow_cafe_global_academy.close(map, points_cafe[0]);
        infowindow_cafe_1nd_student_youngtop.close(map, points_cafe[1]);
        infowindow_cafe_2nd_student.close(map, points_cafe[2]);
        infowindow_cafe_library.close(map, points_cafe[3]);
        infowindow_cafe_3nd_student.close(map, points_cafe[4]);
      }

      function store_on() {
        map.panTo(center);

        for (var i = 0; i < points_store.length; i++) {
          points_store[i].setMap(map);
        }
        kakao.maps.event.addListener(points_store[0], 'click', function() {
          infowindow_store_1nd_student.open(map, points_store[0]);
        });
        kakao.maps.event.addListener(points_store[1], 'click', function() {
          infowindow_store_2nd_student.open(map, points_store[1]);
        });
        kakao.maps.event.addListener(points_store[2], 'click', function() {
          infowindow_store_3nd_student.open(map, points_store[2]);
        });
        kakao.maps.event.addListener(points_store[3], 'click', function() {
          infowindow_store_library.open(map, points_store[3]);
        });
      }

      function store_off() {
        for (var i = 0; i < points_store.length; i++) {
          points_store[i].setMap(null);
        }
        kakao.maps.event.removeListener(points_store[0], 'click', function() {
          infowindow_store_1nd_student.open(map, points_store[0]);
        });
        kakao.maps.event.removeListener(points_store[1], 'click', function() {
          infowindow_store_2nd_student.open(map, points_store[1]);
        });
        kakao.maps.event.removeListener(points_store[2], 'click', function() {
          infowindow_store_3nd_student.open(map, points_store[2]);
        });
        kakao.maps.event.removeListener(points_store[3], 'click', function() {
          infowindow_store_library.open(map, points_store[3]);
        });
        infowindow_store_1nd_student.close(map, points_store[0]);
        infowindow_store_2nd_student.close(map, points_store[1]);
        infowindow_store_3nd_student.close(map, points_store[2]);
        infowindow_store_library.close(map, points_store[3]);
      }

      function atm_on() {
        map.panTo(center);

        for (var i = 0; i < points_atm_hana.length; i++) {
          points_atm_hana[i].setMap(map);
          kakao.maps.event.addListener(points_atm_hana[i], 'click', function() {
            infowindow_atm_hana.open(map, points_atm_hana[i]);
          });
        };
        for (var i = 0; i < points_atm_kb.length; i++) {
          points_atm_kb[i].setMap(map);
          kakao.maps.event.removeListener(points_atm_kb[i], 'click', function() {
            infowindow_atm_kb.open(map, points_atm_kb[i]);
          });
        };
        point_atm_sh.setMap(map);
        kakao.maps.event.addListener(point_atm_sh, 'click', function() {
          infowindow_atm_sh.open(map, points_store[i]);
        });
        point_atm_nh.setMap(map);
        kakao.maps.event.addListener(point_atm_nh, 'click', function() {
          infowindow_atm_nh.open(map, point_atm_nh);
        });
        point_atm_post.setMap(map);
        kakao.maps.event.addListener(point_atm_post, 'click', function() {
          infowindow_atm_post.open(map, point_atm_post);
        });
      }

      function atm_off() {
        for (var i = 0; i < points_atm_hana.length; i++) {
          points_atm_hana[i].setMap(null);
          kakao.maps.event.removeListener(points_atm_hana[i], 'click', function() {
            infowindow_atm_hana.open(map, points_atm_hana[i]);
          });
          infowindow_atm_hana.close(map, points_atm_hana[i]);
        };
        for (var i = 0; i < points_atm_kb.length; i++) {
          points_atm_kb[i].setMap(null);
          kakao.maps.event.removeListener(points_atm_kb[i], 'click', function() {
            infowindow_atm_kb.open(map, points_atm_kb[i]);
          });
          infowindow_atm_kb.close(map, points_atm_kb[i]);
        };
        point_atm_sh.setMap(null);
        kakao.maps.event.removeListener(point_atm_sh, 'click', function() {
          infowindow_atm_sh.open(map, points_store[i]);
        });
        point_atm_nh.setMap(null);
        kakao.maps.event.removeListener(point_atm_nh, 'click', function() {
          infowindow_atm_nh.open(map, point_atm_nh);
        });
        point_atm_post.setMap(null);
        kakao.maps.event.removeListener(point_atm_post, 'click', function() {
          infowindow_atm_post.open(map, point_atm_post);
        });
        infowindow_atm_sh.close(map, points_store[i]);
        infowindow_atm_nh.close(map, point_atm_nh);
        infowindow_atm_post.close(map, point_atm_post);
      }

      function bank_on() {
        map.panTo(center);

        for (var i = 0; i < points_bank.length; i++) {
          points_bank[i].setMap(map);
          kakao.maps.event.addListener(points_bank[i], 'click', function() {
            infowindow_bank.open(map, points_bank[i]);
          });
        };
      }

      function bank_off() {
        for (var i = 0; i < points_bank.length; i++) {
          points_bank[i].setMap(null);
          kakao.maps.event.removeListener(points_bank[i], 'click', function() {
            infowindow_bank.open(map, points_bank[i]);
          });
          infowindow_bank.close(map, points_bank[i]);
        };
      }

      function bookstore_on() {
        map.panTo(center);

        point_bookstore.setMap(map);
        kakao.maps.event.addListener(point_bookstore, 'click', function() {
          infowindow_bookstore.open(map, point_bookstore);
        });
      }

      function bookstore_off() {
        point_bookstore.setMap(null);
        kakao.maps.event.removeListener(point_bookstore, 'click', function() {
          infowindow_bookstore.open(map, point_bookstore);
        });
        infowindow_bookstore.close(map, point_bookstore);
      }

      function glasses_on() {
        map.panTo(center);

        point_glasses.setMap(map);
        kakao.maps.event.addListener(point_glasses, 'click', function() {
          infowindow_glasses.open(map, point_glasses);
        });
      }

      function glasses_off() {
        point_glasses.setMap(null);
        kakao.maps.event.removeListener(point_glasses, 'click', function() {
          infowindow_glasses.open(map, point_glasses);
        });
        infowindow_glasses.close(map, point_glasses);
      }

      function post_on() {
        map.panTo(center);

        point_post.setMap(map);
        kakao.maps.event.addListener(point_post, 'click', function() {
          infowindow_post.open(map, point_post);
        });
      }

      function post_off() {
        point_post.setMap(null);
        kakao.maps.event.removeListener(point_post, 'click', function() {
          infowindow_post.open(map, point_post);
        });
        infowindow_post.close(map, point_post);
      }

      function pharm_on() {
        map.panTo(center);

        point_pharm.setMap(map);
        kakao.maps.event.addListener(point_pharm, 'click', function() {
          infowindow_pharm.open(map, point_pharm);
        });
      }

      function pharm_off() {
        point_pharm.setMap(null);
        kakao.maps.event.removeListener(point_pharm, 'click', function() {
          infowindow_pharm.open(map, point_pharm);
        });
        infowindow_pharm.close(map, point_pharm);
      }

      function library_on() {
        map.panTo(center);

        point_library.setMap(map);
        kakao.maps.event.addListener(point_library, 'click', function() {
          infowindow_library.open(map, point_library);
        });
      }

      function library_off() {
        point_library.setMap(null);
        kakao.maps.event.removeListener(point_library, 'click', function() {
          infowindow_library.open(map, point_library);
        });
        infowindow_library.close(map, point_library);
      }

      function soccer_on() {
        map.panTo(center);

        point_soccer.setMap(map);
        kakao.maps.event.addListener(point_soccer, 'click', function() {
          infowindow_soccer.open(map, point_soccer);
        });
      }

      function soccer_off() {
        point_soccer.setMap(null);
        kakao.maps.event.removeListener(point_soccer, 'click', function() {
          infowindow_soccer.open(map, point_soccer);
        });
        infowindow_soccer.close(map, point_soccer);
      }

      function stationery_on() {
        map.panTo(center);

        point_stationery.setMap(map);
        kakao.maps.event.addListener(point_stationery, 'click', function() {
          infowindow_stationery.open(map, point_stationery);
        });
      }

      function stationery_off() {
        point_stationery.setMap(null);
        kakao.maps.event.removeListener(point_stationery, 'click', function() {
          infowindow_stationery.open(map, point_stationery);
        });
        infowindow_stationery.close(map, point_stationery);
      }

      function health_on() {
        map.panTo(center);

        point_health.setMap(map);
        kakao.maps.event.addListener(point_health, 'click', function() {
          infowindow_health.open(map, point_health);
        });
      }

      function health_off() {
        point_health.setMap(null);
        kakao.maps.event.removeListener(point_health, 'click', function() {
          infowindow_health.open(map, point_health);
        });
        infowindow_health.close(map, point_health);
      }

      function recruit_on() {
        map.panTo(center);

        point_recruit.setMap(map);
        kakao.maps.event.addListener(point_recruit, 'click', function() {
          infowindow_recruit.open(map, point_recruit);
        });
      }

      function recruit_off() {
        point_recruit.setMap(null);
        kakao.maps.event.removeListener(point_recruit, 'click', function() {
          infowindow_recruit.open(map, point_recruit);
        });
        infowindow_recruit.close(map, point_recruit);
      }
