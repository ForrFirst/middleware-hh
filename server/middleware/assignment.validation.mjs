export const validateCreatePostData = (req, res, next) => {
    if (!req.body.title) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Title ของโพสต์เข้ามาด้วย"
        })
      }
      
      if (!req.body.content) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Content ของโพสต์เข้ามาด้วย"
        })
      }
      
      if (!req.body.category) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Category ของโพสต์เข้ามาด้วย"
        })
      } 
    
    if (!req.body.email) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Email ของโพสต์เข้ามาด้วย"
        })
      }

const email = req.body.email;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "กรุณากรอกอีเมลให้ถูกต้องตามรูปแบบ เช่น example@email.com"
        });
    }

    if (req.body.content.length < 500 || req.body.content.length > 1000) {
        return res.status(400).json({
             message: "กรุณาส่งข้อมูล Content ของโพสต์ตามที่กำหนดมีความยาวอยู่ในระหว่าง 500 - 1000 ตัวอักษร"
         })
    }

    next()
    
}