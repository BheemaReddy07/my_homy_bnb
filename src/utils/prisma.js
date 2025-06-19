import { PrismaClient } from "@prisma/client";

let prisma;
try {
    if (process.env.NODE_ENV === "production") {
        prisma = new PrismaClient();
        console.log("PrismaClient initialized in production");
    } else {
        if (!global.prisma) {
            global.prisma = new PrismaClient();
            console.log("PrismaClient initialized in development");
        }
        prisma = global.prisma;
    }
} catch (error) {
    console.error("Failed to initialize PrismaClient:", error.message);
    throw new Error(`PrismaClient initialization failed: ${error.message}`);
}

export { prisma };