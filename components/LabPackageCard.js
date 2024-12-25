import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const LabPackageCard = ({
    packageDisplayName,
    reportsTatText,
    isHomeSampleAvailable,
    isCenterVisitPackage,
    priceRange,
    price,
    discount,
    isAvailable,
}) => {
    return (
        <Card className="border rounded-lg shadow-md">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px" }}>
                <div>
                    <p style={{
                        color: 'rgb(5, 10, 78)',
                        fontFamily: 'Nunito',
                        fontSize: '15px',
                        fontWeight: 600,
                        marginBottom: '5px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>
                        {packageDisplayName}
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img alt="" src="https://www.medibuddy.in/assets/icons/corpLabs/labs-reports-tat.svg" />
                        <p style={{
                            color: "rgb(51, 51, 51)",
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            paddingLeft: "5px",
                            marginBottom: "3px"
                        }}>
                            {reportsTatText}
                        </p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{
                            color: 'rgb(5, 10, 78)',
                            cursor: 'pointer',
                            fontFamily: 'Nunito',
                            fontSize: '13px',
                            fontWeight: 549,
                            marginRight: '10px',
                        }}>
                            Available at:
                        </p>
                        <div style={{ display: "flex", gap: "4px" }}>
                            <div style={{ display: "flex", gap: "4px" }}>
                                <img width="10px" src="https://www.medibuddy.in/assets/icons/ahc/home-sample.svg" height="10" alt="" />
                                {isHomeSampleAvailable && <p style={{
                                    color: 'rgb(5, 10, 78)',
                                    fontFamily: 'Nunito',
                                    fontSize: '13px',
                                }}>Home</p>}
                            </div>
                            <div style={{ display: "flex", gap: "4px" }}>
                                <img width="10px" src="https://www.medibuddy.in/assets/icons/ahc/lab-sample.svg" height="10" alt="" />
                                {isCenterVisitPackage && <p style={{
                                    color: 'rgb(5, 10, 78)',
                                    fontFamily: 'Nunito',
                                    fontSize: '13px',
                                }}>Center</p>}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                    <div>
                        <div>
                            <p style={{
                                color: "rgb(130, 130, 130)",
                                fontFamily: "Nunito, sans-serif",
                                fontSize: "12px",
                                fontWeight: 300,
                                textDecoration: "line-through",
                            }}>
                                ₹ {priceRange}/-
                            </p>
                            <p style={{
                                backgroundColor: "rgb(246, 255, 223)",
                                color: "rgb(121, 171, 40)",
                                fontFamily: "Nunito, sans-serif",
                                fontSize: "12px",
                                fontWeight: 600,
                                marginLeft: "10px",
                                paddingInlineEnd: "8px",
                                paddingInlineStart: "8px",
                            }}>
                                {discount}% OFF
                            </p>
                        </div>

                        <p style={{
                            color: "rgb(5, 10, 78)",
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "18px",
                            fontWeight: 540,
                        }}>
                            ₹ {price}/-
                        </p>
                    </div>

                    <button
                        style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            border: "1px solid rgb(23, 120, 242)",
                            borderRadius: "10px",
                            color: "rgb(23, 120, 242)",
                            cursor: "pointer",
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "14px",
                            fontWeight: 600,
                            height: "33.6px",
                            textAlign: "center",
                            padding: "5px 20px",
                            textTransform: "none",
                        }}
                        disabled={!isAvailable}
                    >
                        {isAvailable ? "Add" : "Unavailable"}
                    </button>
                </div>
            </div>
        </Card>
    );
};
