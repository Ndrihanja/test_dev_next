"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// prisma/seed.ts
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.article.createMany({
                        data: [
                            {
                                title: "Découvrir Next.js",
                                description: "Introduction à Next.js et à ses fonctionnalités principales",
                                content: "Next.js est un framework React permettant de créer des applications web performantes avec SSR et SSG.",
                                image: "https://images.unsplash.com/photo-1612831455541-96f0d136f9f5?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "L'Art de la Photographie",
                                description: "Conseils pour améliorer vos photos",
                                content: "La photographie est un art qui demande pratique et patience. Découvrez nos conseils pour capturer des images incroyables.",
                                image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "Cuisine: Recettes du Monde",
                                description: "Explorez des saveurs venues d'ailleurs",
                                content: "Découvrez des recettes faciles et délicieuses provenant de différentes cultures.",
                                image: "https://images.unsplash.com/photo-1512058564366-c9e9b0c9d8f3?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "Voyage en Islande",
                                description: "Itinéraire et conseils pour un voyage inoubliable",
                                content: "L'Islande est une destination incroyable pour les amoureux de la nature et des paysages spectaculaires.",
                                image: "https://images.unsplash.com/photo-1526779259212-9b6d6c78b3b1?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "Les Bienfaits du Yoga",
                                description: "Améliorez votre corps et votre esprit",
                                content: "Le yoga aide à réduire le stress, améliorer la flexibilité et renforcer le corps tout en apaisant l'esprit.",
                                image: "https://images.unsplash.com/photo-1554284126-ef3b22a5f2f0?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "Technologies Émergentes",
                                description: "Comprendre l'IA et la blockchain",
                                content: "L'intelligence artificielle et la blockchain révolutionnent le monde des technologies modernes.",
                                image: "https://images.unsplash.com/photo-1581091215368-4d8c2f518a68?auto=format&fit=crop&w=800&q=80",
                            },
                        ],
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(console.error)
    .finally(function () { return prisma.$disconnect(); });
