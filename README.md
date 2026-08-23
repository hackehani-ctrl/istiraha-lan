# استراحة LAN

بنية أولية حقيقية لخادم وسائط محلي مبني على Next.js App Router وTypeScript وPrisma/SQLite، مع واجهة عربية RTL وPWA manifest.

## التشغيل


    tnpm ci
cp .env.example .env
npx prisma generate
npx prisma migrate dev --name init
npm run dev

## النطاق الحالي

هذه المرحلة تقتصر على scaffold الأساسي وطبقة قاعدة البيانات الأولية. لم تتم إضافة المصادقة أو رفع الوسائط أو FFmpeg أو streaming أو الاشتراكات والتراخيص بعد.
