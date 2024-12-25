import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function PackageCard({
    packageDisplayName,
    reportsTatText,
    testCount,
    testsSummary,
    isRadiologyIncluded,
    consultationCount,
    fastingHoursText,
    priceRange,
    price,
    discount,
    isAvailable,
}) {
    return (
        <Card className="max-w-md border rounded-lg shadow-sm p-4">
            <p
                style={{
                    color: "#050a4e",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "18px",
                    fontWeight: "549",
                    height: "40px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    lineHeight: "23px !important"
                }}
            >
                {packageDisplayName}
            </p>
            <div style={{display:"flex",alignItems:"center"}}>
            <img  alt="" src="https://www.medibuddy.in/assets/icons/corpLabs/labs-reports-tat.svg"></img>
            <p style={{
                color: "rgb(51, 51, 51)",
                display: "flow-root",
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                height: "22px",
                lineHeight: "22px",
                overflowX: "hidden",
                overflowY: "hidden",
                paddingLeft: "5px",
                textOverflow: "ellipsis",
                marginBottom:"3px"
            }}>
                {reportsTatText}
            </p>

            </div>


            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="mb-2">
                    <p style={{
                        color: "rgb(5, 10, 78)",
                        display: "block",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        height: "22px",
                        lineHeight: "22px",
                    }}>{testCount} Tests</p>
                    <ul style={{
                        color: "rgb(130, 130, 130)",
                        display: "flow-root",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "12px",
                        fontWeight: 300,
                        height: "16px",
                        lineHeight: "16px",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        textAlign: "left",
                        textOverflow: "ellipsis",
                        listStyleType: "circle"
                    }}>
                        {testsSummary.map((test, index) => (
                            <li key={index}>{test}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-2">
                    <p style={{
                        color: "rgb(5, 10, 78)",
                        display: "block",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        height: "22px",
                        lineHeight: "22px",
                    }}>Includes</p>
                    <ul className="list-none pl-0 text-gray-600" style={{
                        color: "rgb(130, 130, 130)",
                        display: "flow-root",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "12px",
                        fontWeight: 300,
                        height: "16px",
                        lineHeight: "16px",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        textAlign: "left",
                        textOverflow: "ellipsis",
                    }}>
                        {isRadiologyIncluded && (
                            <li className="flex items-center">
                                <span className="mr-2">🩻</span> Radiology
                            </li>
                        )}
                        {consultationCount > 0 && (
                            <li className="flex items-center">
                                <span className="mr-2">👨‍⚕️</span> {consultationCount}{" "}
                                Consultation(s)
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <p style={{
                        color: "rgb(5, 10, 78)",
                        display: "block",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        height: "32px",
                        lineHeight: "16px"
                    }}>Available at:</p>
                    <p style={{
                        color: "rgb(5, 10, 78)",
                        display: "block",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "12px",
                        height: "32px",
                        lineHeight: "16px",
                    }}>🏥 Center</p>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <p style={{
                        color: "rgb(5, 10, 78)",
                        display: "block",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        height: "32px",
                        lineHeight: "16px",
                    }}>Fasting:</p>
                    <p style={{
                        color: "rgb(5, 10, 78)",
                        display: "block",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "12px",
                        height: "32px",
                        lineHeight: "16px",
                    }}>{fastingHoursText}</p>
                </div>
            </div>




            <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
                <div>
                    <div className="text-sm">
                        <p style={{
                            color: "rgb(130, 130, 130)",
                            display: "inline",
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "12px",
                            fontWeight: 300,
                            height: "auto",
                            lineHeight: "16px",
                            textDecorationColor: "rgb(130, 130, 130)",
                            textDecorationLine: "line-through",
                            textDecorationStyle: "solid",
                            textDecorationThickness: "auto",
                            textSizeAdjust: "100%",
                            userSelect: "none",
                            visibility: "visible",
                        }}>₹{priceRange}/-</p>
                        <p style={{
                            backgroundColor: "rgb(246, 255, 223)",
                            backgroundImage: "none",
                            backgroundOrigin: "padding-box",
                            backgroundPositionX: "0%",
                            backgroundPositionY: "0%",
                            backgroundRepeat: "repeat",
                            backgroundSize: "auto",
                            boxSizing: "border-box",
                            color: "rgb(121, 171, 40)",
                            display: "inline",
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "12px",
                            fontWeight: 600,
                            height: "auto",
                            lineHeight: "16px",
                            marginLeft: "10px",
                            paddingInlineEnd: "8px",
                            paddingInlineStart: "8px",
                            textSizeAdjust: "100%",
                            userSelect: "none",
                        }}>{discount}% OFF</p>
                    </div>
                    <p   style={{
    color: "rgb(5, 10, 78)",
    display: "inline",
    fontFamily: "Nunito, sans-serif",
    fontSize: "18px",
    fontWeight: 540,
    height: "auto",
    lineHeight: "23px",
    textSizeAdjust: "100%",
    userSelect: "none",
    visibility: "visible",
  }}>₹ {price}/- <span style={{
    color: "rgb(130, 130, 130)",
    display: "inline",
    fontFamily: "Nunito, sans-serif",
    fontSize: "13px",
    fontWeight: 300,
    height: "auto",
    lineHeight: "22px",
    marginLeft: "10px",
    textSizeAdjust: "100%",
    userSelect: "none",
    visibility: "visible",
  }}>Onwards</span></p>
                </div>
                <button
                    style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        backgroundImage: "none",
                        borderBottomColor: "rgb(23, 120, 242)",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "0.8px",
                        borderImageOutset: "0",
                        borderImageRepeat: "stretch",
                        borderImageSlice: "100%",
                        borderImageSource: "none",
                        borderImageWidth: "1",
                        borderLeftColor: "rgb(23, 120, 242)",
                        borderLeftStyle: "solid",
                        borderLeftWidth: "0.8px",
                        borderRightColor: "rgb(23, 120, 242)",
                        borderRightStyle: "solid",
                        borderRightWidth: "0.8px",
                        borderTopColor: "rgb(23, 120, 242)",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopStyle: "solid",
                        borderTopWidth: "0.8px",
                        boxSizing: "border-box",
                        color: "rgb(23, 120, 242)",
                        cursor: "pointer",
                        display: "flex",
                        fontFamily: "Nunito, sans-serif",
                        fontFeatureSettings: "normal",
                        fontKerning: "auto",
                        fontOpticalSizing: "auto",
                        fontSize: "14px",
                        fontSizeAdjust: "none",
                        fontStretch: "100%",
                        fontStyle: "normal",
                        fontVariantAlternates: "normal",
                        fontVariantCaps: "normal",
                        fontVariantEastAsian: "normal",
                        fontVariantEmoji: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantPosition: "normal",
                        fontVariationSettings: "normal",
                        fontWeight: 600,
                        height: "33.6px",
                        justifyContent: "center",
                        letterSpacing: "normal",
                        lineHeight: "22px",
                        marginBottom: "0px",
                        marginLeft: "0px",
                        marginRight: "0px",
                        marginTop: "0px",
                        outlineColor: "rgb(23, 120, 242)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        overflowX: "visible",
                        overflowY: "visible",
                        paddingBlockEnd: "5px",
                        paddingBlockStart: "5px",
                        paddingBottom: "5px",
                        paddingInlineEnd: "20px",
                        paddingInlineStart: "20px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "5px",
                        textAlign: "center",
                        textIndent: "0px",
                        textRendering: "auto",
                        textShadow: "none",
                        textSizeAdjust: "100%",
                        textTransform: "none",
                        textWrapMode: "nowrap",
                        touchAction: "manipulation",
                        userSelect: "none",
                        verticalAlign: "middle",
                    }}
                    disabled={!isAvailable}
                >
                    {isAvailable ? "Add" : "Unavailable"}
                </button>
            </div>

        </Card>
    );
}
