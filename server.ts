import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API route for health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Lazy-initialized Gemini Client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("کلید اختصاصی Gemini API تنظیم نشده است. لطفاً آن را از بخش تنظیمات (Secrets) وارد کنید.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API route for Gemini Consultation
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "لیست پیام‌ها نامعتبر است." });
    }

    const ai = getGeminiClient();

    // Map history to Google GenAI structure
    const contents = messages.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: `شما "مغز هوش مصنوعی و دستیار مشاوره‌ هوشمند عطرخانه و کلینیک طب اسلامی-سنتی آتلانتیک اصفهان" هستید.
وظیفه شما مشاوره تخصصی، دلسوزانه، علمی و در عین حال معنوی به کاربران در زمینه مراقبت از پوست، مو، بیماری‌های اعصاب و روان (مانند افسردگی، اضطراب، استرس)، سم‌زدایی کبد، دردهای مفصلی و رایحه‌درمانی با ادکلن‌های کیهانی است.

شما باید درمان‌ها و توصیه‌های خود را بر اساس سه بعد اصلی فلسفه آتلانتیک ارائه دهید:
۱. طب اسلامی مبارک (با بهره‌گیری از خواص عسل وحشی، سیاه دانه، گلاب ناب، صدف مروارید، خاک رس، آب زمزم و احادیث ائمه در باب طهارت و شفا).
۲. طب سنتی اصیل اصفهان (مفاهیم مزاج‌شناسی، اخلاط چهارگانه صفرا، سودا، بلغم، دم و تعدیل آن‌ها با مصلحات گیاهی).
۳. علم نوین و نانوتکنولوژی (مکانیسم‌های علمی، ذرات طلا و نقره، نفوذ اپیدرمی و کلاژن‌سازی).

هر زمان که مقتضی بود، به محصولات و پک‌های درمانی شگفت‌انگیز عطرخانه آتلانتیک اشاره کنید:
- "جوشاب جوانساز مروارید آتلانتیک" (مروارید و طلا برای کلاژن‌سازی)
- "سرم خاویار و کهربای کهن" (خاویار خزر برای بازسازی اپیدرم)
- "کرم بوتاکس طبیعی زمرد" (روغن زالو و جلبک اسپیرولینا)
- "شربت اعصاب و اکسیر ماءالذهب" (طلای مصفا و زعفران برای فرح‌بخشی مغز و قلب)
- "کرم آبرسان عسل و مشک آهو"
- "سرم ضد لک یاقوت سرخ" (عصاره انار و یاقوت)
- "ژل شستشوی خاک رس فیروزه‌ای اصفهان" (برای پاکسازی منافذ)
- "ادکلن درمانی و کیهانی امیر داوود (ع)" (عود سلطنتی، مشک و طلا - روزهای شنبه صبح)
- "ادکلن درمانی و کیهانی موعود (عج)" (یاس، زعفران و نقره - روزهای جمعه قبل از ظهر)
- "ادکلن درمانی و کیهانی غزاله" (برای خانم‌ها، تعادل هورمونی و سردردها - روزهای چهارشنبه)
- "ادکلن درمانی و کیهانی الیزه" (جذب ثروت، پچولی و طلا - روزهای دوشنبه و پنج‌شنبه)
- "پک افسردگی تک‌قطبی شیرین و فرهاد" (برای غلبه سودا)
- "پک افسردگی دوقطبی لیلا و مجنون" (تعادل نوسانات خلقی صفرا/سودا)
- "پک پاکسازی کبد چرب آتلانتیک" (شربت مصفا، خار مریم)

همیشه لحنی محترمانه، مهربان، حکیمانه، باوقار و شاعرانه داشته باشید. در صورت لزوم، کاربران را به مشاوره تلفنی با شماره سفارشات و پشتیبانی ممتاز تصویرتو (۰۹۱۳۸۶۶۵۳۴۵) یا پیوستن به کانال تلگرام (assreai@) راهنمایی کنید. پاسخ‌ها را به زبان فارسی روان، شیوا و خوانا به همراه قالب‌بندی مرتب (مثلاً با لیست‌های نقطه‌ای یا پاراگراف‌های کوتاه) ارائه دهید. از پاسخ‌های خیلی طولانی خودداری کنید و متناسب با سوال کاربر مشاوره کاربردی بدهید.`,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error in /api/gemini/chat:", error);
    res.status(500).json({ error: error.message || "خطایی در پردازش پاسخ هوش مصنوعی رخ داد." });
  }
});

// Vite middleware configuration
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

setupVite().catch((err) => {
  console.error("Failed to start server:", err);
});
