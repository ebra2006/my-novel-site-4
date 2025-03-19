import { useState } from "react";
import { db } from "../firebase"; // استيراد Firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CommentForm = ({ chapterId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return; // تأكد أن التعليق مش فاضي

    try {
      await addDoc(collection(db, "comments"), {
        chapterId, // تخزين رقم الفصل المرتبط بالتعليق
        text: comment,
        username: "مستخدم مجهول", // هنستبدلها لاحقًا باسم المستخدم الفعلي بعد تسجيل الدخول
        timestamp: serverTimestamp(),
      });
      setComment(""); // مسح الحقل بعد الإرسال
    } catch (error) {
      console.error("خطأ في إرسال التعليق:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="اكتب تعليقك هنا..."
        required
      />
      <button type="submit">إرسال</button>
    </form>
  );
};

export default CommentForm;
